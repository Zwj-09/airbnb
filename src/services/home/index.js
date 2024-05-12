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

/**
 * @interface /home/hotrecommenddest
 * @methods get
 * @desc 热门推荐
 * @param
 */
export const getHomeRecommendtList = () => {
  return request({
    url: '/home/hotrecommenddest',
    method: 'get'
  });
};

/**
 * @interface /home/longfor
 * @methods get
 * @desc 向往数据
 * @param
 */
export const getHomeLongFortList = () => {
  return request({
    url: '/home/longfor',
    method: 'get'
  });
};
/**
 * @interface /home/plus
 * @methods get
 * @desc Plus 会员数据
 * @param
 */
export const getHomePlusList = () => {
  return request({
    url: '/home/plus',
    method: 'get'
  });
};
