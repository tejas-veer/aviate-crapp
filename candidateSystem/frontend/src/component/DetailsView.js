import React from "react";

function DetailsView(props) {
  console.log(props.candidate.name);
  return (
    <div className="container">
        <h5>Status : <span  className={`${
                    props.candidate.status === "Accepted"
                      ? "text-success"
                      : props.candidate.status === "Rejected"
                      ? "text-danger"
                      : "text-primary"
                  }`}>{props.candidate.status} </span></h5> 
        <hr />
        <h5>Name : {props.candidate.name} </h5> 
        <hr />
        <h5>
            Phone : {props.candidate.phone}
        </h5>
        <hr /><h5>
            Email : {props.candidate.email}
        </h5>
        <hr /><h5>
            Education : {props.candidate.education}
        </h5>
        <hr /><h5>
            Experience : {props.candidate.experience}
        </h5>
        <hr />

    </div>
  );
}

export default DetailsView;
