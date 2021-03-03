import request from '@/api/request';
export const getList = (params) => {
  return request({
      url: '/api/systemResource/remoteQueue/getList',
      method: 'get',
      params: params
  });
}