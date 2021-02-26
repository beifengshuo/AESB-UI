//setToken
export const SET_TOKEN = "SET_TOKEN";
export const setToken =(info)=>{
    return{
        type:SET_TOKEN,
        payload:info
    }
}
//clearToken
export const CLEAR_TOKEN = "CLEAR_TOKEN";
export const clearToken =(info)=>{
    return{
        type:CLEAR_TOKEN,
        payload:info
    }
}
//刷新token
export const SET_REFRESH_TOKEN = "SET_REFRESH_TOKEN";
export const setRefreshToken =(info)=>{
    return{
        type:SET_REFRESH_TOKEN,
        payload:info
    }
}