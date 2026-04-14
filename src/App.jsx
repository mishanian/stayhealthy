import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Notification from "./components/Notification.jsx";
import Sign_Up from "./components/Sign_Up.jsx";
import Login from "./components/Login.jsx";
import FindDoctorSearch from "./components/FindDoctorSearch.jsx";
import AppointmentFormIC from "./components/AppointmentFormIC.jsx";
import GiveReviews from "./components/GiveReviews.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import AppointmentForm from "./components/AppointmentForm.jsx";
import DoctorCard from "./components/DoctorCard.jsx";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState(
    "Welcome to StayHealthy. Book appointments and connect with doctors online."
  );

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setNotificationMessage("You are now logged in.");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setNotificationMessage("You have been logged out.");
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <main className="container" id="home">
        <Notification message={notificationMessage} />
        <section className="card hero">
          <h1>StayHealthy</h1>
          <p>
            A patient-friendly healthcare platform that helps people in remote and underserved
            areas find doctors, book appointments, and manage their healthcare online.
          </p>
        </section>
        <div className="grid">
          <Sign_Up />
          <Login onLoginSuccess={handleLoginSuccess} />
        </div>
        <div className="grid">
          <FindDoctorSearch />
          <AppointmentForm />
        </div>
        <div className="grid">
          <AppointmentFormIC />
          <DoctorCard />
        </div>
        <div className="grid">
          <GiveReviews />
          <ProfileCard />
        </div>
      </main>
    </>
  );
}
