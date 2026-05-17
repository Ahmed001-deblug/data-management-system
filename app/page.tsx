"use client";

import { useState } from "react";
import { supabase } from "./lib/supabase";

export default function Home() {
  const [matricNumber, setMatricNumber] = useState("");
  const [student, setStudent] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const searchStudent = async () => {
    if (!matricNumber) {
      alert("Please enter matric number");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase
      .from("students")
      .select("*")
      .eq("matric_number", matricNumber.trim())
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
    <main className="min-h-screen bg-gradient-to-r from-blue-700 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-black/80 p-8 rounded-2xl shadow-2xl w-full max-w-md text-white">
        <h1 className="text-4xl font-bold mb-3">Student Portal</h1>

        <p className="mb-6 text-gray-300">
          Search student records using matric number
        </p>

        <input
          type="text"
          placeholder="Enter matric number"
          value={matricNumber}
          onChange={(e) => setMatricNumber(e.target.value)}
          className="w-full p-3 rounded-lg text-black mb-4 outline-none"
        />

        <button
          onClick={searchStudent}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 transition-all p-3 rounded-lg font-semibold"
        >
          {loading ? "Searching..." : "Search"}
        </button>

        {student && (
          <div className="mt-6 bg-gray-900 p-5 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">
              Student Details
            </h2>

            <p>
              <strong>Name:</strong> {student.full_name}
            </p>

            <p>
              <strong>Matric Number:</strong> {student.matric_number}
            </p>

            <p>
              <strong>Department:</strong> {student.department}
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