import React from "react";

function SignUp() {
  return (
    <>
      <h1 className="center">SIGN UP</h1>
      <div className="outcard">
        <label>Email: </label>
        <br />
        <input className="inputs" type="email" />
        <br />
        <br />

        <label>Password: </label>
        <input className="inputs" type="password" />
        <br />
        <br />

        <button className="btns">SUBMIT</button>
      </div>
    </>
  );
}

export default SignUp;
