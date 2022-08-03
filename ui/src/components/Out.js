import React, { useEffect, useState } from "react";
import "react-router-dom";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";
import { CSVLink } from "react-csv";

function Out() {
  const [csvData, setCsvData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data) {
      setCsvData(data.map((item) => [item.SID, item.checkin, item.checkout]));
    }
  }, [data]);

  useEffect(() => {
    getAPI();
  }, []);

  const getAPI = () => {
    const API = "http://localhost:8080/out";

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
  if (!data || !loading) {
    return <div>Loading..</div>;
  }
  return (
    <>
      <div className="nav">
        <Link to="/home" className="link">
          <div>Home</div>
        </Link>
        <Link to="/login" className="link">
          <div>Logout</div>
        </Link>
      </div>
      <div className="home-container scroll-height">
        <h1>Table Info</h1>

        <div className="out">
          {data.map((item, index) => {
            return (
              <table key={item._id} className="csvtable">
                <td className="grid-item first">
                  {index + 1} {item.SID}
                </td>
                <td className="grid-item">
                  In:{DateTime.fromISO(item.checkin).toFormat("hh:mm:ss")}
                </td>
                <td className="grid-item">
                  Out:
                  {DateTime.fromISO(item.checkout).toFormat("hh:mm:ss")}{" "}
                </td>
              </table>
            );
          })}
        </div>
      </div>
      <div className="export">
        <CSVLink data={csvData} className="text-btn p-16">
          {" "}
          Export as Excel file
        </CSVLink>
      </div>
    </>
  );
}

export default Out;
