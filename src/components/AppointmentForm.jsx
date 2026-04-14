import { useState } from "react";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Appointment booked for ${formData.name} on ${formData.date} at ${formData.time}.`);
  };

  return (
    <div className="card" id="appointments">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <label>Phone Number</label>
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
        <label>Date</label>
        <input name="date" type="date" value={formData.date} onChange={handleChange} required />
        <label>Time</label>
        <input name="time" type="time" value={formData.time} onChange={handleChange} required />
        <button type="submit">Book Appointment</button>
      </form>
      {message && <p className="small">{message}</p>}
    </div>
  );
}
