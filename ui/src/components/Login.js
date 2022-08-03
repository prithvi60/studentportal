import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as Email } from "./images/email.svg";
import { ReactComponent as Password } from "./images/password.svg";
import { ReactComponent as Profile } from "./images/student.svg";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  let navigate = useNavigate();
  let register = (e) => {
    e.preventDefault();

    if (emaillog === "") {
      return toast("Please enter valid email", {
        duration: 1000,
      });
    }
    if (!emaillog.includes("@")) {
      return toast("Please include @ in email", {
        duration: 1000,
      });
    }
    if (passwordlog === "") {
      return toast("Please enter password", {
        duration: 1000,
      });
    }
    // navigate("/home");
  };
  async function handleClick() {
    // Send data to the backend via POST
    await fetch("http://localhost:8080/users/login", {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      redirect: "follow",
      referrerPolicy: "no-referrer",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ email: emaillog, password: passwordlog }),
    }).then((json) => {
      if (json.ok) {
        navigate("/home");
      }
    });
  }

  return (
    <form onSubmit={register}>
      <div className="main">
        <div className="sub-main">
          <div className="inner-container">
            <div className="imgs">
              <div className="container-image">
                <Profile alt="profile" className="profile" />
              </div>
            </div>
            <div>
              <h1 className="LHeader">Login</h1>
              <div>
                <Email alt="emial" className="email" />
                <input
                  type="text"
                  placeholder="Enter Email"
                  //  className="box-input"
                  onChange={(event) => setEmaillog(event.target.value)}
                />
              </div>
              <div className="second-input">
                <Password alt="password" className="email" />
                <input
                  type="password"
                  placeholder="Enter Password"
                  //  className="box-input"
                  onChange={(event) => setPasswordlog(event.target.value)}
                />
              </div>

              <button
                className="text-btn imp"
                type="submit"
                onClick={handleClick}
              >
                Login
              </button>
              <Toaster
                position="bottom-right"
                toastOptions={{
                  style: {
                    color: "#3b3086",
                  },
                }}
              />
              <div className="reg-link">
                <Link className="link" to="/registration">
                  <li>Register Now</li>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
