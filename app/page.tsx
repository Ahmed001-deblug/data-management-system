"use client";

import { useState } from "react";
import { supabase } from "./lib/supabase";

export default function Home() {
  const [matricNumber, setMatricNumber] = useState("");
  const [student, setStudent] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const searchStudent = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("students")
      .select("*")
      .ilike("matric_number", matricNumber.trim());

    setLoading(false);

    console.log(data);
    console.log(error);

    if (!data || data.length === 0) {
      alert("Student not found");
      return;
    }

    setStudent(data[0]);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to bottom right, #0f172a, #1e3a8a)",
        color: "white",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "#1e293b",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 0 30px rgba(0,0,0,0.4)",
        }}
      >
        <h1 style={{ fontSize: "50px", marginBottom: "10px" }}>
          Student Portal
        </h1>

        <p style={{ marginBottom: "30px", color: "#cbd5e1" }}>
          Search student records using matric number
        </p>

        <input
          type="text"
          placeholder="Enter matric number"
          value={matricNumber}
          onChange={(e) => setMatricNumber(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "10px",
            border: "none",
            marginBottom: "20px",
            fontSize: "16px",
          }}
        />

        <button
          onClick={searchStudent}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "10px",
            border: "none",
            background: "#2563eb",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          {loading ? "Searching..." : "Search Student"}
        </button>

        {student && (
          <div
            style={{
              marginTop: "30px",
              background: "#0f172a",
              padding: "20px",
              borderRadius: "15px",
            }}
          >
            <h2>Student Details</h2>

            <p>
              <strong>Name:</strong> {student.full_name}
            </p>

            <p>
              <strong>Matric Number:</strong>{" "}
              {student.matric_number}
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