import React from 'react';

export const Appointment = ({customer}) => ( < div > {customer.firstName} < /div>);

export const AppointmentsDayView = ({appointments}) => (
  <div id="appointmentsDayView">
  <ol>
  {appointments.map((appointment) => (
      <div key={appointment.startsAt}>
      <li>{appointmentTimeOfDay(appointment.startsAt)}</li>
    </div>
    ))}
  </ol>
  </div>
);

const appointmentTimeOfDay = startsAt => {
    const [h, m] = new Date(startsAt).toTimeString().split(':');
    return `${h}:${m}`;
}