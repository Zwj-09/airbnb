import request from '@/services/request';

export const getHomeGoodPriceList = () => {
  return request({
    url: '/home/goodprice',
    method: 'get'
  });
};
