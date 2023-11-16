import styled from 'styled-components';

export const FooterWrapper = styled.div`
  border-top: 1px solid #eee;
  padding: 48px 24px;
  .sections {
    display: flex;
    justify-content: space-around;
    .section {
      font-size: 14px;
      h1 {
        color: rgb(72, 72, 72);
        transition: all 0.3s linear;
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
      .parts {
        margin-top: 16px;
        .part {
          margin-top: 4px;
          color: #767676;

          transition: all 0.3s linear;
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
