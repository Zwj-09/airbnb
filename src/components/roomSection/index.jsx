import React, { memo } from 'react';
import Rating from '@mui/material/Rating';
import { RoomWrapper, RoomItemWrapper } from './style';
import { useNavigate } from 'react-router-dom';
import LazyLoad from '@/components/lazyLoad/index';

const RoomSection = memo((props) => {
  const roomList = props.data;

  const navigate = useNavigate();

  const handleToDetail = () => {
    navigate('/detail');
  };
  const loadMore = () => {
    navigate('/entire');
  };

  return (
    <div className="list-box">
      <div className="good-price w">
        <h1 className="text-3xl mb-2">{roomList?.title}</h1>
        <h2 className="text-lg mb-2">{roomList?.subtitle}</h2>

        <RoomWrapper>
          {roomList.list?.map((item) => {
            return (
              <RoomItemWrapper
                $contentColor={item?.bottom_info?.content_color}
                $verifyColor={item?.verify_info?.text_color}
                $starRatingColor={item?.star_rating_color}
                key={item.id}
              >
                <div className="room-inner" onClick={() => handleToDetail()}>
                  <div className="cover-img">
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
                    <span className="ml-1">{item.bottom_info?.content}</span>
                  </div>
                </div>
              </RoomItemWrapper>
            );
          })}
        </RoomWrapper>

        <div onClick={loadMore}>查看更多</div>
      </div>
    </div>
  );
});

export default RoomSection;
