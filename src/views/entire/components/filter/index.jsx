import React, { memo } from 'react';
import { FilterWrapper } from './style';

const FilterSection = memo((props) => {
  const filterList = props.data || [];

  return (
    <FilterWrapper>
      {filterList.map((item) => {
        return (
          <div className="filter-item" key={item.value}>
            {item.label}
          </div>
        );
      })}
    </FilterWrapper>
  );
});

FilterSection.propTypes = {};

export default FilterSection;
