import request from '@/api/request';
export const getList = (params) => {
  return request({
      url: '/api/systemResource/localQueue/getList',
      method: 'get',
      params: params
  });
}
//详细信息的列表
export const getInfoList = (params) => {
  return request({
      url: '/api/systemResource/localQueue/getInfoList',
      method: 'get',
      params: params
  });
}

