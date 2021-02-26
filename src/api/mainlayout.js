import request from './request'
// export const getWhoami = () => {
//     return request({
//         method: 'get',
//         url: '/user/getUserByToken',
//     });
// }


// //域列表
// export const getRealm = () => {
//     return request({
//         method:'get',
//         url:`/auth/admin/realms`,
//     });
// }
// //获取某个域的数据
// export const getRealmDetail = (name) => {
//     return request({
//         method:'get',
//         url:`/auth/admin/realms/${name}`,//http://192.168.2.234:8080/auth/admin/realms/master
//     });
// }

// //获取某个域的数据
// export const saveRealmDetail = (realmName,data) => {
//     return request({
//         method:'put',
//         url:`/auth/admin/realms/${realmName}`,//http://192.168.2.234:8080/auth/admin/realms/master
//         data,
//     });
// }
// //添加域
// export const addRealm = (data) => {
//     return request({
//         url: '/auth/admin/realms',
//         method:'post',
//         data,
//     });
// }
// //删除域
// export const deleteRealm = (name) => {
//     return request({
//         url: `/auth/admin/realms/${name}`,
//         method:'delete', 
//     });
// }


// //获取账户信息
// export const getAccountInfo = (params) => {
//     return request({
//         url: `/auth/realms/master/account`,
//         method:'get', 
//         params,
//         // headers: {
//         //     Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
//         // }
//     });
// }

// //保存账户信息
// export const saveServerinfo = (params,data) => {
//     return request({
//         url: `/auth/realms/master/account/?${setQueryConfig(params)}`,
//         method:'post', 
//         data,
//         transformRequest: [function (data) {
//             return transformRequest(data);
//         }],
//         headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Upgrade-Insecure-Requests':1
//         }
//     });
// }

// //获取服务器信息
// export const getServerinfo = () => {
//     return request({
//         url: `/auth/admin/serverinfo`,
//         method:'get', 
//     });
// }
// //获取密码信息
// export const getPasswordInfo = (params) => {
//     return request({
//         url: `/auth/realms/master/account/password`,
//         method:'get', 
//         params,
//     });
// }
// //获取会话信息
// export const getSeesionInfo = (params) => {
//     return request({
//         url: `/auth/realms/master/account/sessions`,
//         method:'get', 
//         params,
//     });
// }





