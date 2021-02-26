//集成平台》应用管理
import request from '../request';
//获取应用列表
export const getApplicationList = (params) => {//分页查询应用列表，包含模糊查询
    return request({
        method: 'post',
        url: '/api/centre/application/selectPageApplication',
        params,
    });
}
