//运营平台》租户审批
import request from '../request';
//获取租户审批的列表
export const getTenantApplyList = (data) => {
    return request({
        method: 'post',
        url: '/api/operation/tenantApply/selectTenantApplyPage',
        data,
    });
}
//查看租户申请详情
export const getTenantInfo = (id) => {//根据ID查询租户申请信息
    return request({
        method: 'get',
        url: `/api/operation/tenantApply/getTenantInfo/${id}`,
      
    });
}
//获取审批租户申请详情
export const getTenantApplyInfo = (id) => {//根据ID查询租户信息，及所有权限项
    return request({
        method: 'post',
        url: `/api/operation/tenantApply/approval/${id}`,
      
    });
}

