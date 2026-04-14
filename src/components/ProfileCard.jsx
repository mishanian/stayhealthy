import { useState } from "react";

export default function ProfileCard() {
  const [profile, setProfile] = useState({
    name: "Mehran Ishanian",
    email: "mehran@example.com",
    phone: "+1 514 555 0101"
  });
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="card">
      <h2>Profile Card</h2>
      {!editing ? (
        <>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Phone:</strong> {profile.phone}</p>
          <button onClick={() => setEditing(true)}>Edit Profile</button>
        </>
      ) : (
        <form>
          <label>Name</label>
          <input name="name" value={profile.name} onChange={handleChange} />
          <label>Email</label>
          <input name="email" value={profile.email} onChange={handleChange} />
          <label>Phone</label>
          <input name="phone" value={profile.phone} onChange={handleChange} />
          <button type="button" onClick={() => setEditing(false)}>Save</button>
        </form>
      )}
    </div>
  );
}
