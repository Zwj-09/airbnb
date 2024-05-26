import styled from 'styled-components';

export const FilterWrapper = styled.div`
  border-bottom: 1px solid #f0f0f0;
  padding: 8px 20px;
  box-sizing: border-box;

  display: flex;
  align-items: center;

  .filter-item {
    border: 1px solid #f0f0f0;
    margin-right: 4px;
    padding: 20px;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 14px;
    cursor: pointer;
    white-space: nowrap;

    &:last-child {
      margin-right: 0;
    }

    &.active {
      background: #007489;
      color: #fff;
    }
  }
`;
