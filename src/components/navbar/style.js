import styled from 'styled-components';

export const H1 = styled('h1')` 
  font-size: 2.4rem;
  padding: 0;
  margin: 0;
  color: ${props => props.theme.color.accent};
`;

export const Nav = styled('nav')` 
  display: flex;
  justify-content: center;
  padding: 2rem;
  margin-bottom: 1.6rem;
  background-color: ${props => props.theme.color.main};
`;