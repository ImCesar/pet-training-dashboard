import React from "react";
import { CustomersContext } from "./CustomersContext";
import { useCustomersState } from "./useCustomersState";
import fetchCustomers from "../../utilities/fetchCustomers";

export default ({ children }) => {
  const customersState = useCustomersState(fetchCustomers());

  return (
    <CustomersContext.Provider value={{ ...customersState }}>
      {children}
    </CustomersContext.Provider>
  );
};
