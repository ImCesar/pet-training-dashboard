import React, { useEffect, useState } from 'react';
import { Field, Select, TextInput } from 'composable-dashboard';
import { EditDetailContainer } from './style';
import { useCustomer } from './useCustomer';
import { useCustomers } from '../../hooks/useCustomers/useCustomers';

export default (props) => {
  const { updateCustomer } = useCustomers();

  let { 
    customer, 
    setEnrollment, 
    setName, 
    setNickname, 
    setAge, 
    setSex 
  } = useCustomer(props.customer);

  useEffect(() => {
    return () => {
      updateCustomer(customer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customer]);

  const handleChange = fn => event => {
    fn(event.target.value);
  }

  return (
    <EditDetailContainer>
      <Field label="Name">
        <TextInput value={customer.name} onChange={handleChange(setName)} />
      </Field>
      <Field label="Nickname">
        <TextInput value={customer.nickname} onChange={handleChange(setNickname)} />
      </Field>
      <Field label="Age">
        <TextInput value={customer.age} onChange={handleChange(setAge)} />
      </Field>
      <Field label="Sex">
        <TextInput value={customer.sex} onChange={handleChange(setSex)} />
      </Field>
      <Field label="Enrollment">
        <Select value={customer.enrollment} onChange={handleChange(setEnrollment)}>
          <option value="Enrolled">Enrolled</option>
          <option value="Enrolling">Enrolling</option>
          <option value="Expelled">Expelled</option>
        </Select>
      </Field>
    </EditDetailContainer>
  );
}