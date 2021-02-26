//运营平台》租户管理
import request from '../request';
//获取租户列表
export const getTenantList = (data) => {
    return request({
        method: 'post',
        url: '/api/operation/tenant/selectTenantPage',
        data,
    });
}
//新增租户
export const addTenant = (data) => {
    return request({
        method: 'post',
        url: '/api/operation/tenant/addTenant',
        data,
    });
}
//批量删除租户
export const deleteTenantBybatch = (data) => {//data=>ids=>['',''],
    return request({
        method: 'delete',
        url: '/api/operation/tenant/batchDelete',
        data,
    });
}
//批量解冻租户
export const batchUnfrozenTenant = (data) => {//租户集合,每个对象需包含id,状态status:2(表示解冻);解冻理由unfrozenReason
    return request({
        method: 'put',
        url: '/api/operation/tenant/batchUnfrozenTenant',
        data,
    });
}
//批量冻结租户
export const batchFrozenTenant = (data) => {//租户集合,每个对象需包含id,状态status:3(表示冻结);冻结理由frozenReason
    return request({
        method: 'put',
        url: '/api/operation/tenant/batchFrozenTenant',
        data,
    });
}
//编辑租户
export const editTenant = (data) => {//租户实体,包含修改后的租户编码code;租户名称name;联系人LinkMan;联系邮箱LinkEmail
    return request({
        method: 'put',
        url: '/api/operation/tenant/updateTenant',
        data,
    });
}

//修改功能权限
export const updateTenantConfig = (data) => {
    return request({
        method: 'put',
        url: `/api/operation/tenant/updateTenantConfig`,
        data
    });
}
//查看租户
export const viewTenant = (code) => {
    return request({
        method: 'get',
        url: `/api/operation/tenant/getById/${code}`,
    });
}










