import React from 'react';
import PetProfile from './custom-components/PetProfile';
import { CustomerProfile, Inbox } from 'composable-dashboard';
import { useLocation } from 'react-router-dom';
import { FlexContainer } from './style';

export default () => {
  const location = useLocation();

  return (
    <FlexContainer>
      <CustomerProfile customer={location.state} imageSrc={location.state.profileImage} />
      <PetProfile customer={location.state} />
      <Inbox />
    </FlexContainer>
  )
}
