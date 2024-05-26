import React, { memo, useState } from 'react';
import { FilterWrapper } from './style';
import classnames from 'classnames';

const FilterSection = memo((props) => {
  const filterList = props.data || [];
  const [currentItem, setCurrentItem] = useState([]);

  const handleClickFilterItem = (item) => {
    const arr = [...currentItem];
    if (arr.includes(item)) {
      const sliceItemIndex = arr.findIndex((obj) => obj === item);
      arr.splice(sliceItemIndex, 1);
    } else {
      arr.push(item);
    }
    setCurrentItem(arr);
  };

  return (
    <FilterWrapper>
      {filterList.map((item) => {
        return (
          <div
            className={classnames('filter-item', {
              active: currentItem.includes(item)
            })}
            key={item.value}
            onClick={() => handleClickFilterItem(item)}
          >
            {item.label}
          </div>
        );
      })}
    </FilterWrapper>
  );
});

FilterSection.propTypes = {};

export default FilterSection;
