import styled from 'styled-components';

export const ScrollSectionWrapper = styled.div`
  position: relative;
  .cover-img {
    width: 180px;
    height: 200px;
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }

  .info {
    position: absolute;
    z-index: 99;
    left: 50%;
    bottom: 5%;
    transform: translateX(-50%);
    color: #fff;
  }
`;
