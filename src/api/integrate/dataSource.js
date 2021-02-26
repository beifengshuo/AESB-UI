//集成平台》数据源管理
import request from '../request';
//获取数据源列表
export const getDatasourceList = (params) => {//分页查询数据源列表
    return request({
        method: 'post',
        url: '/api/centre/datasource/selectPageDataSource',
        params,
    });
}