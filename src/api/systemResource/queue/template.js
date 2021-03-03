import request from '@/api/request';
export const getList = (params) => {
  return request({
      url: '/api/systemResource/templateQueue/getList',
      method: 'get',
      params: params
  });
}