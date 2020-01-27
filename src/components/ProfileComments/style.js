import styled from "styled-components";

export const MessageContainer = styled("span")`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    margin-left: 0.2rem;
  }
`;

export const H3 = styled("h3")`
  font-size: 1.6rem;
  margin: 0.8rem 0;
`;

export const ProfileCommentsContainer = styled("div")`
  margin-top: 1.6rem;
  width: 40rem;
`;

export const AddCommentContainer = styled("div")`
  display: flex;
  justify-content: flex-end;

  * {
    display: flex;
    align-items: center;
  }

  & button span {
    margin-right: 0.4rem;
  }
`;
