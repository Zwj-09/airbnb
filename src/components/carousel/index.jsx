import React, { memo } from 'react';
import { Carousel } from 'antd';

const CarouselSection = memo(() => {
  return (
    <Carousel autopla effect="fade">
      <img className="cover" src={require('@/assets/img/cover.jpeg')} alt="" />
      <img className="cover" src={require('@/assets/img/cover.jpeg')} alt="" />
      <img className="cover" src={require('@/assets/img/cover.jpeg')} alt="" />
    </Carousel>
  );
});

export default CarouselSection;
