import styled from 'styled-components';

export const RoomWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
`;

export const RoomItemWrapper = styled.div`
  width: 25%;
  padding: 8px;
  .room-inner {
    width: 100%;

    .cover-img {
      position: relative;
      box-sizing: border-box;
      padding: 66.66% 8px 0;
      border-radius: 3px;
      overflow: hidden;
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }

    .desc {
      color: ${(props) => props.$verifyColor};
    }

    .name {
      /* display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis; */
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .rate {
      color: ${(props) => props.$starRatingColor};
    }
  }
`;
