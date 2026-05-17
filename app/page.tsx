"use client";

import { useState } from "react";

export default function Home() {
  const [matricNumber, setMatricNumber] = useState("");
  const [student, setStudent] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const searchStudent = async () => {
    setLoading(true);

    const students: any = {
      "22/03sen041": {
        full_name: "Ibrahim Musa",
        matric_number: "22/03sen041",
        department: "Computer Science",
        level: "300",
        course: "Cyber Security",
        email: "ibrahim@student.com",
      },

      "22/03sen042": {
        full_name: "Aisha Bello",
        matric_number: "22/03sen042",
        department: "Computer Science",
        level: "300",
        course: "Software Engineering",
        email: "aisha@student.com",
      },

      "22/03sen043": {
        full_name: "Ahmed Mustapha Zubairu",
        matric_number: "22/03sen043",
        department: "Computer Science",
        level: "300",
        course: "Big Data Analytics",
        email: "ahmed@student.com",
      },

      "22/03sen044": {
        full_name: "Fatima Yusuf",
        matric_number: "22/03sen044",
        department: "Computer Science",
        level: "300",
        course: "Artificial Intelligence",
        email: "fatima@student.com",
      },

      "22/03sen045": {
        full_name: "Usman Garba",
        matric_number: "22/03sen045",
        department: "Computer Science",
        level: "300",
        course: "Networking",
        email: "usman@student.com",
      },

      "22/03sen046": {
        full_name: "Maryam Abdullahi",
        matric_number: "22/03sen046",
        department: "Computer Science",
        level: "300",
        course: "Machine Learning",
        email: "maryam@student.com",
      },

      "22/03sen047": {
        full_name: "Sani Idris",
        matric_number: "22/03sen047",
        department: "Computer Science",
        level: "300",
        course: "Data Science",
        email: "sani@student.com",
      },

      "22/03sen048": {
        full_name: "Zainab Suleiman",
        matric_number: "22/03sen048",
        department: "Computer Science",
        level: "300",
        course: "Cloud Computing",
        email: "zainab@student.com",
      },

      "22/03sen049": {
        full_name: "Abdul Rahman",
        matric_number: "22/03sen049",
        department: "Computer Science",
        level: "300",
        course: "Mobile App Development",
        email: "abdul@student.com",
      },
    };

    setTimeout(() => {
      const result = students[matricNumber.trim().toLowerCase()];

      if (!result) {
        alert("Student not found");
        setStudent(null);
      } else {
        setStudent(result);
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-700 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-4xl font-bold mb-3 text-black">
          Student Portal
        </h1>

        <p className="mb-6 text-gray-700">
          Search student records using matric number
        </p>

        <input
          type="text"
          placeholder="Enter matric number"
          value={matricNumber}
          onChange={(e) => setMatricNumber(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 mb-4 outline-none text-black"
        />

        <button
          onClick={searchStudent}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all p-3 rounded-lg font-semibold"
        >
          {loading ? "Searching..." : "Search"}
        </button>

        {student && (
          <div className="mt-6 bg-gray-100 p-5 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-black">
              Student Details
            </h2>

            <p className="text-black">
              <strong>Name:</strong> {student.full_name}
            </p>

            <p className="text-black">
              <strong>Matric Number:</strong> {student.matric_number}
            </p>

            <p className="text-black">
              <strong>Department:</strong> {student.department}
            </p>

            <p className="text-black">
              <strong>Level:</strong> {student.level}
            </p>

            <p className="text-black">
              <strong>Course:</strong> {student.course}
            </p>

            <p className="text-black">
              <strong>Email:</strong> {student.email}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}