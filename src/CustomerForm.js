import React, { useState } from 'react';


export const CustomerForm = ({ firstName, lastName, onSubmit }) => {
  const [ customer, setCustomer ] = useState({ firstName, lastName });
  const handleChangeCustomer = ({ target }) =>
    setCustomer(customer => ({
      ...customer,
      firstName: target.value,
      lastName: target.value
    }));

  return (<form id="customer" onSubmit={() => onSubmit(customer)}  onChange={handleChangeCustomer}>
    <label htmlFor="firstName">First name</label>
    <input type="text" name="firstName" id="firstName"  value={firstName} readOnly />

    <label htmlFor="lastName">Last name</label>
    <input
      type="text"
      name="lastName"
      id="lastName"
      value={lastName} readOnly
    />
  </form>)
};
