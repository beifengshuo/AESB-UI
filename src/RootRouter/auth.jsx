import React from 'react';
import { Route, Redirect } from "react-router-dom";
import store from '../store'	// store引用
import {clearToken} from '../store/actions/tokenAction'	// store引用
import { getUTCTime } from "../util";


class PrivateRoute  extends React.Component{
    render(){
       
        let { component: Component,...rest} =this.props; //获取顶层provider上所有的信息
        let isLogin = true;//可以默认登录
        
        if(!rest.location.pre || rest.location.pre!=="/login" ){//不是从登录页面进入的,需要判断token

            const persistRoot = sessionStorage.getItem("persist:root")||undefined;
            const tokenStateJson = persistRoot?JSON.parse(persistRoot).tokenState:undefined;
            const tokenState = tokenStateJson?JSON.parse(tokenStateJson):undefined;
            console.log("tokenState",store.getState().tokenState)
            if(tokenState){//token 存在
                let refresh_expires_in = tokenState['refresh_expires_in']*1;//refresh 有效期
                let start_token_time = tokenState['start_token_time']*1;//refresh 有效期 
                let dd = getUTCTime(new Date());
                isLogin  = (dd - start_token_time ) < refresh_expires_in*1000; 

                // console.log("start_token_time",start_token_time);
                // console.log("dd", dd);
                console.log("dd - start_token_time",dd - start_token_time, refresh_expires_in*1000);

            }else{
                isLogin = false;
            }   
        }
        if(!isLogin){//清除缓存
            //1清除store里的token参数
            // store.dispatch(clearToken());  
        }

        // return <Component {...this.props} />
        return(
            <Route {...rest} render={props=>{
                return isLogin?<Component {...this.props} />:(<Redirect to={{
                        pathname: "/",
                        state: { from: props.location }
                    }}
                />)
            }}/>
        )
    }
}
export default PrivateRoute ;
