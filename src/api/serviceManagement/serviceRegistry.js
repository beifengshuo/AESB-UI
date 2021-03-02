/*Api.js接口管理*/
import request from '../request';
export const getserviceList = (params) => {
  return request({
      url: '/api/serviceRegistry/getList',
      method: 'get',
      params: params
  });
}
/** 增加服务信息createService*/
export const addService = (params) => {
  return request({
      url: '/api/serviceRegistry/createService',
      method: 'get',
      params: params
  });
}

/** 修改服务信息createService*/
export const editService = (params) => {
  return request({
      url: '/api/serviceRegistry/updateService',
      method: 'get',
      params: params
  });
}



