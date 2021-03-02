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
        return config;
    },
    err => {
        return Promise.reject(err)
})

// http response 拦截器
instance.interceptors.response.use(
    response => {
        //拦截响应，做统一处理
       
       
        if(response.status == 200 || response.status == 201 || response.status == 204 ){
            // console.log("response",response)
            let res = response.data;
            // console.log("res",res)
            if(res.code ==200){
                return res.data
            }else if(res.code ==500){
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