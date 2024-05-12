// import PropTypes from 'prop-types';
import React, { memo, useEffect, useRef, useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { ScrollWrapper } from './style';

const ScrollView = memo((props) => {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [posIndex, setPosIndex] = useState(0);
  const totalDistanceRef = useRef();

  const slotRef = useRef(null);
  useEffect(() => {
    const scrollWidth = slotRef.current.scrollWidth; // 可滚动区域
    const clientWidth = slotRef.current.clientWidth; // 本身宽度
    const totalDistance = scrollWidth - clientWidth; // 滚动距离
    totalDistanceRef.current = totalDistance;
    setShowRight(totalDistance > 0);
  }, [props.children]);

  const btnClick = (type) => {
    switch (type) {
      case '左边':
        scrollPosition(posIndex - 1);
        break;
      case '右边':
        scrollPosition(posIndex + 1);
        break;
      default:
        break;
    }
  };

  const scrollPosition = (index) => {
    const scrollLeft = slotRef.current.children[index].offsetLeft;
    slotRef.current.style.transform = `translateX(-${scrollLeft}px)`;
    setPosIndex(index);
    setShowRight(totalDistanceRef.current > scrollLeft);
    setShowLeft(scrollLeft > 0);
  };

  return (
    <ScrollWrapper>
      {showLeft && (
        <div className="icon icon-left" onClick={() => btnClick('左边')}>
          <LeftOutlined />
        </div>
      )}

      {showRight && (
        <div className="icon icon-right" onClick={() => btnClick('右边')}>
          <RightOutlined />
        </div>
      )}

      <div className="scroll">
        <div className="slot" ref={slotRef}>
          {props.children}
        </div>
      </div>
    </ScrollWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
