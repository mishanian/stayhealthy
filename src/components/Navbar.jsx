export default function Navbar({ isLoggedIn, onLogout }) {
  return (
    <nav className="navbar">
      <div className="brand">StayHealthy</div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#appointments">Appointments</a>
        <a href="#signup">Sign Up</a>
        <a href="#login">Login</a>
        {isLoggedIn && (
          <button onClick={onLogout} style={{ width: "auto", padding: "10px 16px", margin: 0 }}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
