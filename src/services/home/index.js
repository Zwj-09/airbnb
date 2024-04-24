import request from '@/services/request';

/**
 * @interface /home/goodprice
 * @methods get
 * @desc 高品质房源
 * @param
 */
export const getHomeGoodPriceList = () => {
  return request({
    url: '/home/goodprice',
    method: 'get'
  });
};

/**
 * @interface /home/highscroe
 * @methods get
 * @desc 高评分房源
 * @param
 */
export const getHomeHighScoreList = () => {
  return request({
    url: '/home/highscore',
    method: 'get'
  });
};
/**
 * @interface /home/discount
 * @methods get
 * @desc 折扣
 * @param
 */
export const getHomeDiscountList = () => {
  return request({
    url: '/home/discount',
    method: 'get'
  });
};
