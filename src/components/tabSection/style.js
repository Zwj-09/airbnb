import styled from 'styled-components';

export const TabWrapper = styled.div`
  .item {
    dispaly: flex;
    margin-right: 10px;
    padding: 14px;
    flex-basis: 120px;
    flex-shrink: 0;
    border: 1px solid #e6e6e6;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s;
    text-align: center;
    white-space: nowrap;
    &:last-child {
      margin-right: 0;
    }

    &.active {
      background: #db0d63;
      color: #fff;
    }
  }
`;
