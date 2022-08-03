import React, { useEffect, useState } from "react";
import "react-router-dom";
import { Link } from "react-router-dom";
import Timer from "./Timer";
import AddStudent from "./AddStudent";
import { DateTime } from "luxon";
import toast, { Toaster } from "react-hot-toast";


function Home() {
  const [fineData, setFineData] = useState("");
  const [fineInfo, setFineInfo] = useState("");

  useEffect(() => {
    getAPI();
  }, [fineData]);
  useEffect(() => {
    if (fineData !== "")
      fetch(`http://localhost:8080/display/${fineData}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setFineInfo(data);
        });
  }, [fineData]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getAPI = () => {
    const API = "http://localhost:8080/show";

    fetch(API)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setLoading(true);
        setData(data);
      });
  };

  async function handleClick(student, id) {
    // Send data to the backend via POST
    await fetch(`http://localhost:8080/check/${id}`, {
      method: "PATCH",
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
        setFineData(id);
        return toast(`Student ${student} checked out`, {
          duration: 1000,
        });
      }
    });
  }

  if (!data || !loading) {
    return <div>Loading..</div>;
  }
  return (
    <>
      <div className="nav">
        {/* <Profile style={{size:"3px"}}/> */}
        <Link to="/out" className="link">
          <div>Excel</div>
        </Link>
        <Link to="/login" className="link">
          <div>Logout</div>
        </Link>
      </div>
      <div className="timer">
        <Timer />
      </div>
      <div className="home-container">
        <h1>Student Info:</h1>
        {data.map((item, index) => {
          return (
            <div key={item._id} className="box">
              <div>
                {index + 1} {item.SID}
              </div>
              <button
                className="btn"
                onClick={() => handleClick(item.SID, item._id)}
              >
                check out
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
          );
        })}
      </div>

      <AddStudent />
      <h2>Fine Info: </h2>
      {fineInfo ? (
        <div className="fine-container">
          <div>Student:{fineInfo.SID}</div>
          <div>
            Check in:{DateTime.fromISO(fineInfo.checkin).toISO()}
          </div>
          <div>
            Check out:{DateTime.fromISO(fineInfo.checkout).toISO()}
          </div>
          <div>
            Min:{fineInfo.min}
          </div>
          <div className="fine">Fine:{fineInfo.fine}</div>
        </div>
      ) : (
        <div>N/A</div>
      )}
    </>
  );
}

export default Home;
