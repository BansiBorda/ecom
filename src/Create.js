import React, {useState } from "react";

const Create = () => {
  const[Name,setName]=useState("");
  const[Email,setEmail]=useState("");

 
  
  const handlesubmit = (e) =>{
    e.preventDefault();
    console.log(Name,Email);
    fetch("http://localhost:3000/Form")
    };
  
  
  return (
    <>
      <h2>create</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label" >
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label" >
            Email-address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        
        <button type="submit"  className="btn btn-primary" onClick={()=>handlesubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
