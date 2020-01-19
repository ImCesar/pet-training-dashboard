import { useReducer } from 'react';
import reducer from './reducer';

export const useCustomer = customer => {
  const [state, dispatch] = useReducer(reducer, customer);

  const setName = name => dispatch({ type: 'setName', name });
  const setNickname = nickname => dispatch({ type: 'setNickname', nickname });
  const setAge = age => dispatch({ type: 'setAge', age });
  const setSex = sex => dispatch({ type: 'setSex', sex });
  const setEnrollment = enrollment => dispatch({ type: 'setEnrollment', enrollment });

  return { 
    customer: state, 
    setName, 
    setNickname, 
    setAge, 
    setSex,
    setEnrollment
  };
}