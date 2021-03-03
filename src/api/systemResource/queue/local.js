import request from '@/api/request';
export const getList = (params) => {
  return request({
      url: '/api/systemResource/localQueue/getList',
      method: 'get',
      params: params
  });
}