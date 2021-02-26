import { combineReducers } from 'redux' ;
import loginReducer from './loginReducer' ;
import mainLayoutReducer from './mainLayoutReducer';
import tokenReducer from "./tokenReducer";


const rootReducer = combineReducers ({
    //token信息
    tokenState: tokenReducer,
    //登录信息
    loginState:loginReducer,
    //主界面
    mainLayoutState:mainLayoutReducer,
    
}) ;

export default rootReducer ;