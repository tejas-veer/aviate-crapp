import "./App.css";

import CandidateForm from "./component/CandidateForm";
import { useState, useEffect } from "react";
import DetailsView from "./component/DetailsView";

function App() {
  const [candidateList, setCandidateList] = useState([]);
  const [currCandidate, setCurrCandidate] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/candi/", {
      method: "GET",
      headers: {
        "Content-Type": "application.json",
        Authorization: "Token 2bdb84760c014d072ebedc993bca027b3bfb5584",
      },
    })
      .then((data) => data.json())
      .then((data) => setCandidateList(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(candidateList);

  const insertCandidateInfo = (candidate) => {
    console.log(candidate);
    const new_candidate = [...candidateList, candidate];
    setCandidateList(new_candidate);
  };

  const updateCandidateInfo = (candidate) => {
    console.log(candidate.name);
    const new_candidate = candidateList.map((c) => {
      if (c.id === candidate.id) {
        return candidate;
      } else {
        return c;
      }
    });
    setCandidateList(new_candidate);
  };

  function updateCandidate(candidate, curr) {
    candidate.status = curr;
    const data = candidate;
    fetch(`http://127.0.0.1:8000/api/candi/${candidate.id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 2bdb84760c014d072ebedc993bca027b3bfb5584",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => updateCandidateInfo(resp))
      .catch((error) => console.log(error));
  }

  return (
    <>
      <div className="row sticky-top bg-dark text-light">
        <div className="col-10">
          <h1>Candidate List</h1>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success mt-2"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            + Add Candidate
          </button>
        </div>
      </div>

      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {candidateList.map((candidate) => {
              return (
                <tr
                  onClick={() => setCurrCandidate(candidate)}
                  data-toggle="modal"
                  data-target="#detailsModal"
                  id="candidate-row"
                  key={candidate.id}
                  className={`text-light + ${
                    candidate.status === "Accepted"
                      ? "bg-success"
                      : candidate.status === "Rejected"
                      ? "bg-danger"
                      : "bg-primary"
                  }`}
                >
                  <td>{candidate.id}</td>
                  <td>{candidate.name}</td>
                  <td>{candidate.phone}</td>
                  <td>{candidate.status}</td>
                  <td>
                    {candidate.status === "Applied" ? (
                      <>
                        <button
                          onClick={() => updateCandidate(candidate, "Accepted")}
                          className="btn btn-success mr-1"
                        >
                          Accept{" "}
                        </button>
                        <button
                          onClick={() => updateCandidate(candidate, "Rejected")}
                          className="btn btn-danger"
                        >
                          Reject
                        </button>
                      </>
                    ) : null}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Candidate
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <CandidateForm
                  insertCandidateInfo={insertCandidateInfo}
                ></CandidateForm>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="detailsModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Candidate Details
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <DetailsView candidate={currCandidate}></DetailsView>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
