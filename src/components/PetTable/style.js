import styled from 'styled-components';

export const StudentCardContainer = styled('div')` 
  display: flex;
  justify-content: center;
  margin-top: 1.6rem;
`;

export const Table = styled('table')`
  font-size: 1.4rem;
  width: 60vw; 
  border-collapse: collapse;
`;

export const TableHeaders = styled('tr')`
  width: 100%;
`;

export const TableHead = styled('th')`
  text-align: left;
  font-size: 1.6rem;
  border-bottom: ${props => props.noBorder ? 0 : '1px'} solid ${props => props.theme.color.accent};
`;

export const TableData = styled('td')` 
  text-align: ${props => props.textAlign || "left"};
  width: 10vw; 
`;

export const DataRow = styled('tr')` 
  padding-right: 2rem;
  & img {
    margin: 0;
    margin-top: 1.6rem;
  }

  &:hover {
    cursor: pointer;

    & td {
      font-weight: bold;
    }
  }
`;