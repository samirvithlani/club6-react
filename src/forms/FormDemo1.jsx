import React, { useState } from "react";

export const FormDemo1 = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const nameHandler = (e) => {
    //console.log(e.target.value);
    setname(e.target.value);
  };

  const submitHandler = () => {
    // console.log(name);
    // console.log(email);

    alert(`Name is ${name} and email is ${email}`);
  }
  return (
    <div>
      <h1 style={{ color: "blue" }}>Form Demo 1</h1>
      <div>
        <label>NAME</label>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => {
            nameHandler(e);
          }}
        ></input>
        {name}
      </div>
      <div>
        <label>EMAIL</label>
        <input
          type="text"
          placeholder="enter email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        ></input>
        {email}
      </div>
      <div>
        <button onClick={()=>submitHandler()}>SUBMIT</button>
      </div>
    </div>
  );
};
