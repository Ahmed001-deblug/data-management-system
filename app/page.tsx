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
      .ilike("matric_number", `%${matricNumber.trim()}%`)
      .single();

    setLoading(false);

    if (error || !data) {
      alert("Student not found");
      setStudent(null);
      return;
    }

    setStudent(data);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to right, #0f172a, #1e3a8a)",
      }}
    >
      <div
        style={{
          background: "#111827",
          padding: "30px",
          borderRadius: "12px",
          width: "350px",
          color: "white",
          boxShadow: "0 0 20px rgba(0,0,0,0.3)",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Student Portal
        </h1>

        <p style={{ marginBottom: "20px", color: "#d1d5db" }}>
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
            borderRadius: "8px",
            border: "none",
            marginBottom: "15px",
            outline: "none",
          }}
        />

        <button
          onClick={searchStudent}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            background: "#2563eb",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {loading ? "Searching..." : "Search"}
        </button>

        {student && (
          <div
            style={{
              marginTop: "20px",
              background: "#1f2937",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <p>
              <strong>Name:</strong> {student.full_name}
            </p>

            <p>
              <strong>Matric Number:</strong> {student.matric_number}
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