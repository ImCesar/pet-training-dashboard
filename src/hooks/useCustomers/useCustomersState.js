import { useReducer, useEffect } from "react";
import customerReducer from "./customersReducer";

export const useCustomersState = customers => {
  const [state, dispatch] = useReducer(customerReducer, { customers });

  useEffect(() => {
    const storedCustomers = localStorage.getItem("customers");
    const storedCustomersExist = storedCustomers !== undefined;
    const parsedStoredCustomers =
      storedCustomersExist && JSON.parse(storedCustomers);

    if (parsedStoredCustomers) {
      const storedCustomersWithDate = parsedStoredCustomers.map(customer => {
        return { ...customer, joinDate: new Date(customer.joinDate) };
      });
      initCustomers(storedCustomersWithDate);
    } else {
      localStorage.setItem("customers", JSON.stringify(state.customers));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("customers", JSON.stringify(state.customers));
  }, [state.customers]);

  const updateCustomer = customer => {
    dispatch({ type: "updateCustomer", customer });
  };

  const initCustomers = customers => {
    dispatch({ type: "initCustomersState", customers });
  };

  const findCustomerById = id => {
    const filteredCustomers = state.customers.filter(customer => {
      return customer.id === id;
    });

    return filteredCustomers.length > 0 ? filteredCustomers[0] : {};
  };

  return {
    customers: state.customers,
    findCustomerById,
    initCustomers,
    updateCustomer
  };
};
