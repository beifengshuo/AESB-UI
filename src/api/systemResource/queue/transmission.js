import request from '@/api/request';
export const getList = (params) => {
  return request({
      url: '/api/systemResource/transmissionQueue/getList',
      method: 'get',
      params: params
  });
}