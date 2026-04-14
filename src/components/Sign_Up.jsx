import { useState } from "react";
import { postData } from "./api";

export default function Sign_Up() {
  const [formData, setFormData] = useState({
    role: "Patient",
    name: "",
    email: "",
    phone: "",
    password: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await postData("/users", formData);
      setMessage(`Registration successful. User ID: ${result.id || "created"}`);
    } catch (error) {
      setMessage(`Registration failed: ${error.message}`);
    }
  };

  return (
    <div className="card" id="signup">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Role</label>
        <select name="role" value={formData.role} onChange={handleChange}>
          <option>Patient</option>
          <option>Doctor</option>
          <option>Admin</option>
        </select>
        <label>Name</label>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
        <label>Email</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <label>Phone</label>
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
        <label>Password</label>
        <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      {message && <p className="small">{message}</p>}
    </div>
  );
}
