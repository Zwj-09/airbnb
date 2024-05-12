import React, { memo } from 'react';
import { EntireWrapper } from './style';
import FilterSection from './components/filter';

const Entire = memo(() => {
  const filterList = [
    { label: '人数', value: '人数' },
    { label: '可免费取消', value: '可免费取消' },
    { label: '同源类型', value: '同源类型' },
    { label: '价格', value: '价格' },
    { label: '位置区域', value: '位置区域' },
    { label: '闪定', value: '闪定' },
    { label: '卧室/床数', value: '卧室/床数' },
    { label: '促销/优惠', value: '促销/优惠' },
    { label: '更多筛选条件', value: '更多筛选条件' }
  ];

  return (
    <EntireWrapper>
      <FilterSection data={filterList}></FilterSection>
      <div className="content">content </div>
      <div className="pagination">pagination </div>
    </EntireWrapper>
  );
});

export default Entire;
