import styled from 'styled-components';

const enrollmentColor = status => {
  switch(status) {
    case "Enrolled":
      return "green";
    case "Expelled":
      return "red";
    case "Enrolling":
      return "purple";
    default:
      return "grey";
  };
};

export const EnrollmentStatus = styled.div` 
  display: flex;
  align-items: center;
  margin-left: 0.8rem;
  font-size: 1.4rem;
  width: fit-content;
  height: fit-content;
  padding: 0.4rem 1.4rem;
  border-radius: 4rem;
  background-color: ${props => enrollmentColor(props.enrollment)};
`;
