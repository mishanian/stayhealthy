import { useState } from "react";
import { postData } from "./api";

export default function Login({ onLoginSuccess }) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postData("/posts", credentials);
      setMessage("Login successful.");
      onLoginSuccess?.();
    } catch (error) {
      setMessage(`Login failed: ${error.message}`);
    }
  };

  return (
    <div className="card" id="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input name="email" type="email" value={credentials.email} onChange={handleChange} placeholder="Email" required />
        <label>Password</label>
        <input name="password" type="password" value={credentials.password} onChange={handleChange} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      {message && <p className="small">{message}</p>}
    </div>
  );
}
