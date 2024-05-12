import styled from 'styled-components';

export const ScrollWrapper = styled.div`
  position: relative;

  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #fff;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.14);
    font-size: 14px;
    color: #000;
    z-index: 999;
    cursor: pointer;
    &.icon-left {
      left: -10px;
    }
    &.icon-right {
      right: -10px;
    }
  }

  .scroll {
    overflow: hidden;
    .slot {
      display: flex;
      transition: transform 250ms ease-in-out;
    }
  }
`;
