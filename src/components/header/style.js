import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  border-bottom: 1px solid #eee;
  padding: 0 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: #fff;
`;

export const LeftWrapper = styled.div`
  flex: 1;
  img {
    width: 160px;
    height: 32px;
    object-fit: cover;
    cursor: pointer;
  }
`;
export const CenterWrapper = styled.div`
  width: 375px;
  padding: 0 24px;
  .search-box {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #ddd;
    border-radius: 30px;
    padding: 10px;

    .search-tab {
      display: flex;
      align-items: center;
      color: #717171;
      transition: color 0.2s linear;
      &:hover {
        cursor: pointer;
      }

      &.active {
        color: #000;
        font-weight: 700;
      }

      .divid {
        width: 1px;
        height: 22px;
        background-color: #ddd;
        margin-left: 20px;
      }

      .search-right_icon {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: #ff385c;
        margin-left: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
      }
    }
  }
`;
export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${(props) => props.theme.color.textColor};

  .btn {
    padding: 8px 8px 8px 14px;
    border: 1px solid #dddddd;
    display: flex;
    align-items: center;
    margin-left: 10px;
    font-size: 14px;
    border-radius: 30px;

    .MuiAvatar-root {
      width: 32px;
      height: 32px;
      margin-left: 10px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
