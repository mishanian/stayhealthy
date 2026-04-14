import { useMemo, useState } from "react";

const doctors = [
  { id: 1, name: "Dr. Sarah Ahmed", specialty: "Cardiology" },
  { id: 2, name: "Dr. Daniel Lee", specialty: "Pediatrics" },
  { id: 3, name: "Dr. Maria Chen", specialty: "Dermatology" },
  { id: 4, name: "Dr. John Patel", specialty: "General Medicine" }
];

export default function FindDoctorSearch() {
  const [query, setQuery] = useState("");

  const filteredDoctors = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return doctors;
    return doctors.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(term) ||
        doctor.specialty.toLowerCase().includes(term)
    );
  }, [query]);

  return (
    <div className="card">
      <h2>Find a Doctor</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by doctor name or specialty"
      />
      <ul>
        {filteredDoctors.map((doctor) => (
          <li key={doctor.id}>
            {doctor.name} - {doctor.specialty}
          </li>
        ))}
      </ul>
    </div>
  );
}
