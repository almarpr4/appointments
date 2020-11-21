import React from 'react';
import { createContainer } from './domManipulators';
import { CustomerForm } from '../src/CustomerForm';
import ReactTestUtils from 'react-dom/test-utils';

describe('CustomerForm', () => {
  let render, container;
  beforeEach(() => {
    ({ render, container } = createContainer());
  });
  const form = (id) => container.querySelector(`form[id="${id}"]`);
  const field = name => form('customer').elements[name];

  const expectToBeInputFieldOfTypeText = (formElement) => {
    expect(formElement).not.toBeNull();
    expect(formElement.tagName).toEqual('INPUT');
    expect(formElement.type).toEqual('text');
  };

  const itIncludesTheExistingValue = (fieldName) => {
    it('includes the existing value for the first name', () => {
      render(<CustomerForm { ...{[fieldName]: 'value'} } />);
      expect(field(fieldName).value).toEqual('value');
    });
  }

  it('renders a form', () => {
    render(<CustomerForm />);
    expect(form('customer')).not.toBeNull();
  });

  const itRendersAsAtextBox = (fieldName) => {
    it('renders as a text box', () => {
      render(<CustomerForm />);
      expectToBeInputFieldOfTypeText(field(fieldName));
    });
  }

  const itRendersALabel = (fieldName, label) => {
    it('renders a label for the first name field', () => {
      render(<CustomerForm/>);
      expect(labelFor(fieldName)).not.toBeNull();
      expect(labelFor(fieldName).textContent).toEqual(label);
    });
  }


  const itAssignsAnIdThatMatchesTheLabelId =  (fieldName) => {
    it('assigns an id that matches the label id to the first name field', () =>
    {
      render(<CustomerForm />);
      expect(field(fieldName).id).toEqual(fieldName);
    });
  }

  const itSubmitsExistingValue = (fieldValue, expectedValue) => {
    it('saves existing first name when submitted', async () => {
      render(<CustomerForm firstName={fieldValue} onSubmit={({firstName}) => expect(firstName).toEqual(expectedValue)}  /> );
      await ReactTestUtils.Simulate.submit(form('customer'));
    });
  }

  const itSubmitsNewValue = (fieldName, value) =>
    it('saves new value when submitted', async () => {
      expect.hasAssertions();
      render(
        <CustomerForm
          { ...{[fieldName]: 'existingValue'} }
          onSubmit={props =>
            expect(props[fieldName]).toEqual(value)
          }
        />);
      await ReactTestUtils.Simulate.change(field(fieldName), {
        target: { value }
      });
      await ReactTestUtils.Simulate.submit(form('customer'));
    });

  const labelFor = (formElement) =>
    container.querySelector(`label[for="${formElement}"]`);



  describe('first name field', () => {
    itRendersAsAtextBox('firstName');
    itIncludesTheExistingValue('firstName');
    itRendersALabel('firstName', 'First name')
    itAssignsAnIdThatMatchesTheLabelId('firstName');
    itSubmitsExistingValue('firstName', 'firstName');
    itSubmitsNewValue('firstName', 'firstName');
  });

  describe('last name field', () => {
    itRendersAsAtextBox('lastName');
    itIncludesTheExistingValue('lastName');
    itRendersALabel('lastName', 'Last name')
    itAssignsAnIdThatMatchesTheLabelId('lastName');
    itSubmitsExistingValue('lastName', 'lastName');
    itSubmitsNewValue('lastName', 'lastName');
  });
  describe('phone number field', () => {

  });
});

