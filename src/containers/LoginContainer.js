import { connect } from 'react-redux' ;
import Login from '@/component/Login' ;
import {withRouter} from "react-router-dom";
import {setToken,clearToken} from '../store/actions/tokenAction';
import {  getWhoAmI } from "@/store/actions/mianLayoutAction";
const mapStateToProps = (state , ownProps) => {
    return {
       ...state.tokenState,
       ...state.loginState,  
    }
}

// 建立props与store.dispatch的映射关系
const mapDispatchToProps = (dispatch , ownProps) => {
    return {
        // clearToken :()=>{
        //     return dispatch(clearToken())
        // },
        // setToken :(info)=>{
        //     return dispatch(setToken(info))
        // },
        // getWhoAmI : () => {
        //     return dispatch(getWhoAmI())
        // },
        // getLoginConfigRequest : () => {
        //     return dispatch(getLoginConfigRequest())
        // },
        // getWhoAmI:(info)=>{
        //     return dispatch(getWhoAmI(info));  
        // },
        // setRedirectUri : (info) => {
        //     return dispatch(setRedirectUri(info));
        // }, 
        // setAuthServerUrl : (info) => {
        //     return dispatch(setAuthServerUrl(info));
        // },  
        // setCode : (info) => {
        //     return dispatch(setCode(info));
        // }, 
        // setRealm : (info) => {
        //     return dispatch(setRealm(info));
        // },
       
        // resetLayoutData :()=>{
        //     return dispatch(resetLayoutData())
        // }
    }
}

const LoginContainer = connect (
    mapStateToProps ,
    mapDispatchToProps
) (Login) ;

export default withRouter(LoginContainer) ;