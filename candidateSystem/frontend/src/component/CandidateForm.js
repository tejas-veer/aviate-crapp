import React, { useState } from 'react'

function CandidateForm(props) {
  const [candidate , setCandidate] = useState({
    name : '',
    phone : '',
    email : '',
    education : '',
    experience : ''
  })



  function insertCandidate (){
    console.warn(candidate)
    const data = candidate
    console.log(data)
    fetch("http://127.0.0.1:8000/api/candi/", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        Authorization: "Token 2bdb84760c014d072ebedc993bca027b3bfb5584",
      },
      body: JSON.stringify(data)
    }).then((resp) => resp.json())
    .then(resp => props.insertCandidateInfo(resp))
  }

  function handleCandidate(e){
    const newCandidate = {...candidate}
    newCandidate[e.target.id] = e.target.value
    setCandidate(newCandidate)
  }

  return (
    <>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" value={candidate.name} onChange={(e) => handleCandidate(e)} className="form-control" id="name" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="text" value={candidate.phone} onChange={(e) => handleCandidate(e)} className="form-control" id="phone" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" value={candidate.email} onChange={(e) => handleCandidate(e)} className="form-control" id="email" required/>
                </div>

                <div className="form-group">
                  <label htmlFor="education">Education</label>
                  <input type="text" value={candidate.education} onChange={(e) => handleCandidate(e)} className="form-control" id="education" required />
                </div>
                <div className="form-group">
                  <label htmlFor="experience">Experience</label>
                  <input type="text" value={candidate.experience} onChange={(e) => handleCandidate(e)} className="form-control" id="experience" required/>
                </div>
                <button  onClick={insertCandidate} className="btn btn-primary">
                  Submit
                </button>
    </>
  )
}

export default CandidateForm