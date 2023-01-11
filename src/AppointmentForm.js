import React from 'react';
const TimeSlotTable = () => <table id="time-slots" />;
export const AppointmentForm = ({
  selectableServices,
  service,
}) => (
  <form id="appointment">
    <label htmlFor="service">Salon service</label>
    <select name="service" value={service} readOnly>
      <option />
      {selectableServices.map((s) => (
        <option key={s}>{s}</option>
      ))}
    </select>
  </form>
);

AppointmentForm.defaultProps = {
  selectableServices: [
    'Cut',
    'Blow-dry',
    'Cut & color',
    'Beard trim',
    'Cut & beard trim',
    'Extensions',
  ],
};
