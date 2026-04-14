import { useState } from "react";

export default function DoctorCard() {
  const [appointmentActive, setAppointmentActive] = useState(true);

  const handleCancelAppointment = () => {
    setAppointmentActive(false);
  };

  return (
    <div className="card">
      <h2>Doctor Card</h2>
      <p><strong>Doctor:</strong> Dr. Sarah Ahmed</p>
      <p><strong>Specialty:</strong> Cardiology</p>
      <p><strong>Status:</strong> {appointmentActive ? "Appointment Confirmed" : "Appointment Cancelled"}</p>
      <button className="danger" onClick={handleCancelAppointment} disabled={!appointmentActive}>
        {appointmentActive ? "Cancel Appointment" : "Cancelled"}
      </button>
    </div>
  );
}
