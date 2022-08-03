import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function AddStudent() {
  const [student, setStudent] = useState("");
  async function handleClick() {
    // Send data to the backend via POST
    await fetch("http://localhost:8080/stud", {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      redirect: "follow",
      referrerPolicy: "no-referrer",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ SID: student }),
    }).then((json) => {
      if (json.ok) {
        // toast
        return toast(`Student ${student} added`, {
          duration: 1000,
        });
      }
    });
    setTimeout(() => {
      window.location.reload();
    }, 2200);
  }

  return (
    <div className="home-container">
      <h1 className="f-2">Add Student</h1>

      <div className="box m-l-0 input-div">
        <input
          type="text"
          placeholder="Student name"
          className="box-input"
          onChange={(event) => setStudent(event.target.value)}
        />
        <button className="text-btn f-24" type="button" onClick={handleClick}>
          ADD
        </button>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              color: "#3b3086",
            },
          }}
        />
      </div>
    </div>
  );
}
