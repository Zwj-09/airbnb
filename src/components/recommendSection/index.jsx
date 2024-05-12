// import PropTypes from 'prop-types';
import React, { memo, useCallback, useState } from 'react';
import TabSection from '@/components/tabSection/index';
import RoomSection from '@/components/roomSection/index';

const recommendSection = memo((props) => {
  const infoData = props.data;

  const Tabs =
    (infoData.dest_address &&
      infoData.dest_address.length &&
      infoData.dest_address.map((item) => item.name)) ||
    [];

  const getListByTab = (tab = Tabs[0]) => {
    return {
      subtitle: '',
      title: '',
      type: infoData.type,
      _id: infoData._id,
      list: infoData.dest_list?.[tab]
    };
  };

  const [tabName, setTabName] = useState(Tabs[0]);
  const handleTabClick = useCallback(
    (tab) => {
      setTabName(tab);
      getListByTab(tab);
    },
    [tabName]
  );

  return (
    <div>
      <h1 className="text-3xl mb-2">{infoData?.title}</h1>
      <h2 className="text-lg mb-2">{infoData?.subtitle}</h2>
      <TabSection tabs={Tabs} tabClick={handleTabClick} />
      <RoomSection data={getListByTab(tabName)}></RoomSection>
    </div>
  );
});

recommendSection.propTypes = {};

export default recommendSection;
