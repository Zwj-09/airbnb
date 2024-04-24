import React, { memo, useEffect } from 'react';
import { Carousel } from 'antd';
import Rating from '@mui/material/Rating';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { HomeWrapper, RoomWrapper, RoomItemWrapper, TabWrapper } from './style';
import { fetchHomeDataAction } from '@/store/modules/home';
import LazyLoad from '@/components/lazyLoad/index';
import { useNavigate } from 'react-router-dom';

const Home = memo(() => {
  // 从 redux 中获取数据
  const { goodPriceList, highScoreList, disCountList } = useSelector(
    (state) => ({
      goodPriceList: state.home.goodPriceList,
      highScoreList: state.home.highScoreList,
      disCountList: state.home.disCountList
    }),
    shallowEqual
  );

  const Tabs =
    disCountList.dest_address &&
    disCountList.dest_address.length &&
    disCountList.dest_address.map((item) => item.name);
  console.log('Tabs', Tabs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  const navigate = useNavigate();

  const handleToDetail = () => {
    console.log('跳转到详情页');
    navigate('/detail');
  };

  return (
    <HomeWrapper>
      <Carousel autopla effect="fade">
        <img
          className="cover"
          src={require('@/assets/img/cover.jpeg')}
          alt=""
        />
        <img
          className="cover"
          src={require('@/assets/img/cover.jpeg')}
          alt=""
        />
        <img
          className="cover"
          src={require('@/assets/img/cover.jpeg')}
          alt=""
        />
      </Carousel>

      <div className="py-10">
        <div className="mb-10">
          <div className="good-price w">
            <h1 className="text-3xl mb-2">{disCountList?.title}</h1>
            <h2 className="text-lg mb-2">{disCountList?.subtitle}</h2>
            <TabWrapper></TabWrapper>
          </div>
        </div>

        <div className="mb-10">
          <div className="good-price w">
            <h1 className="text-3xl mb-2">{highScoreList?.title}</h1>
            <h2 className="text-lg mb-2">{disCountList?.subtitle}</h2>

            <RoomWrapper>
              {highScoreList.list?.map((item) => {
                return (
                  <RoomItemWrapper
                    $contentColor={item?.bottom_info?.content_color}
                    $verifyColor={item?.verify_info?.text_color}
                    $starRatingColor={item?.star_rating_color}
                    key={item.id}
                  >
                    <div
                      className="room-inner"
                      onClick={() => handleToDetail()}
                    >
                      <div className="cover-img">
                        {/* <img src={item.picture_url} alt="" /> */}
                        <LazyLoad src={item.picture_url}></LazyLoad>
                      </div>

                      <div className="desc mt-1 text-sm">
                        {item.verify_info.messages.join(' . ')}
                      </div>

                      <div className="name my-1 text-sm">{item.name}</div>

                      <div className="price mb-1 text-sm">
                        {item.price_format}/晚
                      </div>

                      <div className="rate flex items-center">
                        <Rating
                          value={item.reviews_count ?? 5}
                          readOnly
                          sx={{
                            fontSize: '12px',
                            color: '#00848a'
                          }}
                        />
                        <span className="ml-1">
                          {item.bottom_info?.content}
                        </span>
                      </div>
                    </div>
                  </RoomItemWrapper>
                );
              })}
            </RoomWrapper>
          </div>
        </div>

        <div>
          <div className="good-price w">
            <h1 className="text-3xl mb-2">{goodPriceList?.title}</h1>
            <h2 className="text-lg mb-2">副标题</h2>

            <RoomWrapper>
              {goodPriceList.list?.map((item) => {
                return (
                  <RoomItemWrapper
                    $contentColor={item?.bottom_info?.content_color}
                    $verifyColor={item?.verify_info?.text_color}
                    $starRatingColor={item?.star_rating_color}
                    key={item.id}
                  >
                    <div
                      className="room-inner"
                      onClick={() => handleToDetail()}
                    >
                      <div className="cover-img">
                        {/* <img src={item.picture_url} alt="" /> */}
                        <LazyLoad src={item.picture_url}></LazyLoad>
                      </div>

                      <div className="desc mt-1 text-sm">
                        {item.verify_info.messages.join(' . ')}
                      </div>

                      <div className="name my-1 text-sm">{item.name}</div>

                      <div className="price mb-1 text-sm">
                        {item.price_format}/晚
                      </div>

                      <div className="rate flex items-center">
                        <Rating
                          value={item.reviews_count ?? 5}
                          readOnly
                          sx={{
                            fontSize: '12px',
                            color: '#00848a'
                          }}
                        />
                        <span className="ml-1">
                          {item.bottom_info?.content}
                        </span>
                      </div>
                    </div>
                  </RoomItemWrapper>
                );
              })}
            </RoomWrapper>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
