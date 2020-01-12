import React from 'react';
import PetProfile from './custom-components/PetProfile';
import { CustomerProfile, Inbox } from 'composable-dashboard';
import { useLocation } from 'react-router-dom';
import { FlexContainer } from './style';

export default () => {
  const location = useLocation();

  console.log(location);

  return (
    <FlexContainer>
      <PetProfile customer={location.state} />
      <Inbox />
    </FlexContainer>
  )
}