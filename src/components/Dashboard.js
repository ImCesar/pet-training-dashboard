import React from 'react';
import PetProfile from './custom-components/PetProfile';
import { CustomerProfile, Inbox } from 'composable-dashboard';
import { useLocation } from 'react-router-dom';
import { FlexContainer } from './style';
import { useCustomers } from '../hooks/useCustomers/useCustomers';

export default () => {
  const { state: { customerId }}= useLocation();
  const { findCustomerById } = useCustomers();

  const customer = findCustomerById(customerId);

  return (
    <FlexContainer>
      <CustomerProfile customer={customer} imageSrc={customer.profileImage} />
      <PetProfile customer={customer} />
      <Inbox initMessages={customer.inboxMessages} />
    </FlexContainer>
  )
}
