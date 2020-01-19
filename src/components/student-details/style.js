import styled from 'styled-components';

export const StudentDetailContainer = styled('div')` 
  display: flex;
  flex-direction: column;
`;

export const ImageTextContainer = styled('div')` 
  display: flex;

  & img {
    margin-right: 1.6rem;
  }
`;

export const ButtonContainer = styled('div')` 
  display: flex;
  justify-content: flex-end;
`;

export const EditDetailContainer = styled('div')` 
  & label {
    width: 13rem;
  }

  & input {
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
  }

  & select {
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
    margin-left: 0.5rem;
  }
`