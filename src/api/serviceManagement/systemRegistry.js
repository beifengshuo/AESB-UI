import request from '../request';
export const getList = (params) => {
  return request({
      url: '/api/systemRegistry/getList',
      method: 'get',
      params: params
  });
}