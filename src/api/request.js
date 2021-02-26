import axios from 'axios';
import store from '@/store'	// store引用
import {setGetToken,setRefreshToken} from '@/store/actions/tokenAction'	// store引用
import {ModalComp,MessageComp} from '@/baseComponent/PromptComp'	// store引用
import {getUTCTime} from '@/util';

// 是否正在刷新的标志
let isTokenRefreshing = false;
//存储请求的数组
let subscribesArr = [];


//token过期时间
const isTokenExpire=(initTime,serverTokenExpire)=> {//initTime->初始时间，serverTokenExpire-》有效时长
    const dd= getUTCTime(new Date());
    const ff=(dd - initTime )>serverTokenExpire*1000;
    return ff;
}

//刷新token
export const refreshToken = (data) => {
    return axios({
        url: '/api/jwt/refresh',
        method: 'post',
        data,
    });
};


//通用的请求---实例
let instance = axios.create({
    // baseURL:"/base"
});
instance.interceptors.request.use(
    config => {
        //不需要token的url
        const noNeedTokenUrls = [
            '/jwt/token',
        ];  

        
        //问是否需要token的页面，-1则为需要
        const isNeedTokenIndex = noNeedTokenUrls.findIndex((url)=>config.url.includes(url));
        //
        let persistRoot = sessionStorage.getItem("persist:root");
        let sessionToken = (persistRoot != null && JSON.parse(persistRoot).tokenState)? JSON.parse(JSON.parse(persistRoot).tokenState): null;
        let access_token = sessionToken && sessionToken['access_token']?sessionToken['access_token']:"";
        let expires_in = sessionToken && sessionToken['expires_in']?sessionToken['expires_in']:"";//过期时间
        let start_token_time = sessionToken && sessionToken['start_token_time']?sessionToken['start_token_time']:"";
        let init_token_time = sessionToken && sessionToken['init_token_time']?sessionToken['init_token_time']:"";
        let refresh_expires_in = sessionToken && sessionToken['refresh_expires_in']?sessionToken['refresh_expires_in']:"";

        let isTokenExpired = isTokenExpire( start_token_time , expires_in); //isTokenExpired true过期，false有效
        let isRefreshExpiresed = isTokenExpire( init_token_time , refresh_expires_in); //isRefreshExpiresed true过期，false有效
        //以下判断基于 expires_in <= refresh_expires_in
        if(isNeedTokenIndex == -1 && persistRoot == null){//persistRoot无效,token数据失效,页面失效,返回登录页
            console.log('aaaa')
            // window.location.href='/'
        }else if(isNeedTokenIndex == -1 && persistRoot != null && !isTokenExpired){//token 有效
            let token_type = sessionToken['token_type'];//过期时间
            let access_token = sessionToken['access_token'];//过期时间

            config.headers.Authorization = token_type + " " + access_token;

            return config; 
        }else if(isNeedTokenIndex == -1 && persistRoot != null && isTokenExpired && !isRefreshExpiresed){//刷新token
            if (!isTokenRefreshing) {
                isTokenRefreshing = true;
                refreshToken({
                    grant_type: 'refresh_token',
                    refresh_token: store.getState().tokenState['refresh_token'] || sessionToken['refresh_token'],
                }).then((res)=>{
                    let data = res.data
                    const time = getUTCTime(new Date());
                    console.log('刷新token时间',time);
                    //存入store
                    store.dispatch(setRefreshToken({
                        ...data , 
                        start_token_time : time
                    }));
                    let token = data['token_type'] + " " + data['access_token'];
                    config.headers.Authorization = token;
                    isTokenRefreshing = false;
                    return token
                }).then((token) => {
                    console.log('刷新token成功，执行队列')
                    subscribesArr.forEach(cb => cb(token))
                    // 执行完成后，清空队列
                    subscribesArr = []
                }).catch(err => {
                    console.error('refresh token error: ', err);
                    ModalComp.jumploginConfirm(()=>{
                        window.location.href='/'
                    })  
                }) 
            }
            const retryOriginalRequest = new Promise((resolve) => {
                subscribesArr.push((token) => {
                    // 因为config中的token是旧的，所以刷新token后要将新token传进来
                    config.headers.Authorization = token
                    resolve(config)
                })
            })
            return retryOriginalRequest;
        }else if(isNeedTokenIndex == -1 && persistRoot != null && isTokenExpired && isRefreshExpiresed){//刷新token过期
            console.log('sessionToken',sessionToken)
            window.location.href='/'
        }else{//不需要token
            return config;
        }
    },
    err => {
        return Promise.reject(err)
})

// http response 拦截器
instance.interceptors.response.use(
    response => {
        //拦截响应，做统一处理
       
       
        if(response.status == 200 || response.status == 201 || response.status == 204 ){
            let res = response.data;
            // console.log("res",res)
            if(res.statusCode ==200){
                return res.data
            }else if(res.statusCode ==500){
                MessageComp.error(res.message);
                return Promise.reject(res) // 返回接口返回的错误信息
            }else{
                return res
            }
            
        }else{
            return response
        }
    },
    //接口错误状态处理，也就是说无响应时的处理
    error => {
        return Promise.reject(error) // 返回接口返回的错误信息
    })
export default instance;