import request from '../request';
export const getList = (params) => {
  return request({
      url: '/api/serviceAgent/getList',
      method: 'get',
      params: params
  });
}