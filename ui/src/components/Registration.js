import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Email } from "./images/email.svg";
import { ReactComponent as Password } from "./images/password.svg";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Registration() {
  let navigate = useNavigate();

  const [Info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
    profession: "",
  });
  // console.log("register", Info);

  let register = (e) => {
    e.preventDefault();

    if (Info.email === "") {
      return toast("Please enter valid email", {
        duration: 1000,
      });
    }
    if (!Info.email.includes("@")) {
      return toast("Please include @ in email", {
        duration: 1000,
      });
    }
    if (Info.password === "") {
      return toast("Please enter password", {
        duration: 1000,
      });
    }
    navigate("/");
  };
  async function handleClick() {
    // Send data to the backend via POST
    await fetch("http://localhost:8080/users/register", {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      redirect: "follow",
      referrerPolicy: "no-referrer",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ email: Info.email, password: Info.password }), // body data type must match "Content-Type" header
    });
  }

  return (
    <form onSubmit={register}>
      <div className="main">
        <div className="sub-main">
          <div>
            <div>
              <h1>Registration</h1>

              <div className="mail-id">
                <Email alt="emial" className="email" />
                <input
                  type="text"
                  placeholder="Enter Email"
                  value={Info.email}
                  onChange={(e) => setInfo({ ...Info, email: e.target.value })}
                />
              </div>
              <div className="mail-id">
                <Password alt="emial" className="email" />
                <input
                  type="password"
                  placeholder="Enter New Password"
                  value={Info.password}
                  onChange={(e) =>
                    setInfo({ ...Info, password: e.target.value })
                  }
                />
              </div>

              {/* <Link to="/"> */}
              <button
                type="submit"
                className="text-btn imp"
                onClick={handleClick}
              >
                Register
              </button>
              <Toaster
                position="bottom-right"
                toastOptions={{
                  style: {
                    color: "#3b3086",
                  },
                }}
              />
              {/* </Link> */}
              <div className="reg-link">
                <p>If Account exist then</p>
                <Link className="link" to="/login">
                  <li>Login!!!</li>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Registration;
