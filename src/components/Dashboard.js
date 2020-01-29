import React from "react";
import { CustomerProfile, Inbox } from "composable-dashboard";
import { useLocation } from "react-router-dom";
import { FlexContainer } from "./style";
import { useCustomers } from "../hooks/useCustomers/useCustomers";
import StudentParentInbox from "./custom-components/StudentParentInbox";
import StudentProfile from "./custom-components/StudentProfile";

export default () => {
  const {
    state: { customerId }
  } = useLocation();

  const { findCustomerById } = useCustomers();

  const customer = findCustomerById(customerId);

  return (
    <FlexContainer>
      <StudentProfile customer={customer} />
      <CustomerProfile customer={customer} imageSrc={customer.profileImage} />
      <StudentParentInbox initMessages={customer.inboxMessages} />
    </FlexContainer>
  );
};
