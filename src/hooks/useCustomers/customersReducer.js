export default (state, action) => {
  switch (action.type) {
    case "initCustomersState": {
      return { ...state, customers: action.customers };
    }
    case "updateCustomer": {
      const filteredCustomers = state.customers.filter(customer => {
        return customer.id !== action.customer.id;
      });
      const updatedCustomers = [...filteredCustomers, action.customer];

      return { ...state, customers: updatedCustomers };
    }
    default: {
      return state;
    }
  }
};
