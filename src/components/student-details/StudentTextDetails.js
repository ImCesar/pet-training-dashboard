import React from 'react';
import { Field } from 'composable-dashboard';

export default ({ customer }) => {
  let formattedDate = customer && customer.joinDate && customer.joinDate.toISOString();
  formattedDate = formattedDate && formattedDate.slice(0, formattedDate.indexOf("T"));

  return (
    <div>
      <Field label="Name" value={customer.name} />
      <Field label="Nickname" value={customer.nickname} />
      <Field label="Age" value={customer.age} />
      <Field label="Sex" value={customer.sex} />
      <Field label="Memeber Since">
        <p>{formattedDate}</p>
      </Field>
    </div>
  )
}