import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    console.log(email, password);
    axios
      .post("http://localhost:5000/signin", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {});
  };
  return (
    <>
      <h1 className="center">SIGN IN</h1>
      <div className="outcard">
        <label>Email: </label>
        <br />
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          className="inputs"
          type="email"
        />
        <br />
        <br />

        <label>Password: </label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          className="inputs"
          type="password"
        />
        <br />
        <br />

        <button onClick={handleSubmit} className="btns">
          SUBMIT
        </button>
        <Link
          style={{
            textAlign: "center",
            display: "block",
            marginTop: "10px",
            marginRight: "16px",
          }}
          to={"/signup"}
        >
          SIGN UP
        </Link>
      </div>
    </>
  );
}

export default SignIn;
