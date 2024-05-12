import React, { memo } from 'react';
import ScrollView from '@/components/scrollView/index';
import LazyLoad from '@/components/lazyLoad/index';
import { ScrollSectionWrapper } from './style';

const LongFor = memo((props) => {
  const infoList = props.data;

  const list = infoList.list || [];

  return (
    <div>
      <h1 className="text-3xl mb-2">{infoList?.title}</h1>
      <h2 className="text-lg mb-2">{infoList?.subtitle}</h2>

      <ScrollView>
        {list.map((item) => {
          return (
            <ScrollSectionWrapper key={item.city}>
              <div className="cover-img">
                <LazyLoad src={item.picture_url}></LazyLoad>
              </div>
              <div className="info">
                <div>{item.city}</div>
                <div>{item.price}</div>
              </div>
            </ScrollSectionWrapper>
          );
        })}
      </ScrollView>
    </div>
  );
});

export default LongFor;
