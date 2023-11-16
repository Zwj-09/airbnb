import React, { memo, useState } from 'react';
import { FooterWrapper } from './style';

const AppFooter = memo(() => {
  const [footerInfo] = useState([
    {
      name: '爱彼迎',
      list: [
        { label: '工作机会', value: '工作机会' },
        { label: '爱彼迎新闻', value: '爱彼迎新闻' },
        { label: '政策', value: '政策' },
        { label: '无障碍设施', value: '无障碍设施' }
      ]
    },
    {
      name: '发现',
      list: [
        { label: '信任与安全', value: '信任与安全' },
        { label: '旅行基金', value: '旅行基金' },
        { label: '商务差旅', value: '商务差旅' },
        { label: '爱彼迎杂志', value: '爱彼迎杂志' },
        { label: 'Airbnb.org', value: 'Airbnb.org' }
      ]
    },
    {
      name: '出租',
      list: [
        { label: '为什么出租', value: '为什么出租' },
        { label: '房东义务', value: '房东义务' },
        { label: '开局体验', value: '开局体验' },
        { label: '资源中心', value: '资源中心' }
      ]
    },
    {
      name: '客服支持',
      list: [
        { label: '帮助', value: '帮助' },
        { label: '邻里支持', value: '邻里支持' }
      ]
    }
  ]);

  return (
    <FooterWrapper>
      <div className="sections">
        {footerInfo.map((item) => {
          return (
            <div className="section" key={item.name}>
              <h1>{item.name}</h1>
              <div className="parts">
                {item.list.map((child) => {
                  return (
                    <div className="part" key={child.value}>
                      {child.label}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="detail"></div>
    </FooterWrapper>
  );
});

export default AppFooter;
