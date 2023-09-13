import React, { useState } from "react";

const InputForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // const Formvalue =( )=>{

  const handleSubmit = (event) => {
    const message = {};
    if (!name) {
      message.name = "Field Required";
    }
    if (password.length < 6) {
      message.password = "Incorrect Password";
    }
    if (!validateEmail(email)) {
      message.email = "Invalid Email";
    }
    if (Object.keys(message).length > 0) {
      setErrors({ ...message });
    } else {
      alert("Welcome" + " " + name);
    }

    event.preventDefault();
  };
  function validateEmail(em) {
    return email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "2rem" }}>
          <label>Enter Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span style={{ color: "red" }}>{errors.name}</span>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <label>Enter Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span style={{ color: "red" }}>{errors.email}</span>
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span style={{ color: "red" }}>{errors.password}</span>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default InputForm;
