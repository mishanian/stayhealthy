import { useState } from "react";

export default function AppointmentFormIC() {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Instant consultation requested for ${formData.name}.`);
  };

  return (
    <div className="card">
      <h2>Instant Consultation</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <label>Phone Number</label>
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
        <button type="submit">Request Consultation</button>
      </form>
      {message && <p className="small">{message}</p>}
    </div>
  );
}
