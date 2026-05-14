"use client";

import { useState } from "react";

export default function Home() {
  const [matricNumber, setMatricNumber] = useState("");
  const [student, setStudent] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const searchStudent = async () => {
    setLoading(true);

    setTimeout(() => {
      setStudent({
        full_name: "Ahmed Mustafa",
        matric_number: "22/03sen043",
        department: "Computer Science",
        level: "300",
        course: "Big Data Analytics",
        email: "ahmed@student.com",
      });

      setLoading(false);
    }, 1000);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #0f172a, #2563eb)",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#111827",
          padding: "30px",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "420px",
          color: "white",
          boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Student Portal
        </h1>

        <p
          style={{
            color: "#d1d5db",
            marginBottom: "20px",
          }}
        >
          Search student records using matric number
        </p>

        <input
          type="text"
          placeholder="Enter matric number"
          value={matricNumber}
          onChange={(e) => setMatricNumber(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            marginBottom: "15px",
            outline: "none",
            fontSize: "16px",
          }}
        />

        <button
          onClick={searchStudent}
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            background: "#2563eb",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          {loading ? "Searching..." : "Search"}
        </button>

        {student && (
          <div
            style={{
              marginTop: "25px",
              background: "#1f2937",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "15px",
              }}
            >
              Student Details
            </h2>

            <p>
              <strong>Name:</strong> {student.full_name}
            </p>

            <p>
              <strong>Matric Number:</strong>{" "}
              {student.matric_number}
            </p>

            <p>
              <strong>Department:</strong>{" "}
              {student.department}
            </p>

            <p>
              <strong>Level:</strong> {student.level}
            </p>

            <p>
              <strong>Course:</strong> {student.course}
            </p>

            <p>
              <strong>Email:</strong> {student.email}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}