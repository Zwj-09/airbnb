import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { HomeWrapper } from './style';
import { fetchHomeDataAction } from '@/store/modules/home';
import CarouselSection from '@/components/carousel/index';
import RoomSection from '@/components/roomSection/index';
import RecommendSection from '@/components/recommendSection/index';
import LongFor from '@/components/longFor/index';

const Home = memo(() => {
  // 从 redux 中获取数据
  const {
    goodPriceList,
    highScoreList,
    disCountList,
    recommendList,
    longForList,
    plusList
  } = useSelector(
    (state) => ({
      goodPriceList: state.home.goodPriceList,
      highScoreList: state.home.highScoreList,
      disCountList: state.home.disCountList,
      recommendList: state.home.recommendList,
      longForList: state.home.longForList,
      plusList: state.home.plusList
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <CarouselSection />

      <div className="py-10">
        <div className="mb-10">
          <div className="good-price w">
            <LongFor data={longForList}></LongFor>
          </div>
        </div>

        <div className="mb-10">
          <div className="good-price w">
            <RecommendSection data={disCountList} />
          </div>
        </div>

        <div className="mb-10">
          <div className="good-price w">
            <RecommendSection data={recommendList} />
          </div>
        </div>

        <div className="mb-10">
          <div className="good-price w">
            <RoomSection data={highScoreList}></RoomSection>
          </div>
        </div>

        <div className="mb-10">
          <div className="good-price w">
            <RoomSection data={goodPriceList}></RoomSection>
          </div>
        </div>

        <div>
          <div className="good-price w">
            <RoomSection data={plusList}></RoomSection>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
