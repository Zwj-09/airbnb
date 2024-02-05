import React, { memo } from 'react';
import { Carousel } from 'antd';
import { HomeWrapper } from './style';

import RoomSection from '@/components/roomSection';

const Home = memo(() => {
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

      <RoomSection />

      {/* <div className="list-box">
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
                  <div className="room-inner">
                    <div className="cover-img">
                      <img src={item.picture_url} alt="" />
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
                      <span className="ml-1">{item.bottom_info?.content}</span>
                    </div>
                  </div>
                </RoomItemWrapper>
              );
            })}
          </RoomWrapper>
        </div>
      </div> */}
    </HomeWrapper>
  );
});

export default Home;
