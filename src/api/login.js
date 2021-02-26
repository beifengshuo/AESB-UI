import request from './request';
//用户登录
export const login = (data) => {
    return request({
        url: '/api/auth/jwt/token',
        method: 'post',
        data,
    });
}
//用户登出
export const loginOut = (data) => {
    return request({
        url: '/api/auth/jwt/logout',
        method: 'post',
        data,
    });
}

