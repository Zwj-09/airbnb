// import PropTypes from 'prop-types';
import React, { memo, useState } from 'react';
import classNames from 'classnames';
import ScrollView from '@/components/scrollView';
import { TabWrapper } from './style';

const TabSection = memo((props) => {
  const Tabs = props.tabs;
  const tabClick = props.tabClick;

  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    if (index === activeTab) return;
    setActiveTab(index);
    tabClick(Tabs[index]);
  };

  return (
    <TabWrapper>
      <ScrollView>
        {Tabs &&
          Tabs.map((tab, index) => {
            return (
              <div
                key={tab}
                className={classNames('item', {
                  active: index === activeTab
                })}
                onClick={() => handleTabClick(index)}
              >
                {tab}
              </div>
            );
          })}
      </ScrollView>
    </TabWrapper>
  );
});

TabSection.propTypes = {};

export default TabSection;
