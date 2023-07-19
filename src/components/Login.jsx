import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  let [uEmail, setUEmail] = useState(""),
    [uPwd, setUPwd] = useState("");
  let handleLogin = e => {
    e.preventDefault();
    axios.get("http://localhost:4000/data").then(resolve => {
      let userData = resolve.data.find(value => value.userEmail === uEmail);
      if (userData != undefined) {
        if (userData.userPassword === uPwd) {
          alert("Login Successfully");
        } else {
          alert("Invalid Password");
        }
      } else {
          alert("Invalid Email-Id and Password")
      }
    });
  };
  return (
    <div className="login">
      <div>
        <h1 className="text-center">Login To Gmail</h1>
      </div>
      <form onSubmit={handleLogin}>
        <div className="w-50 m-auto">
          <div>
            <span>Email_id</span>
            <input
              type="text"
              placeholder="Enter Email-Id"
              className="w-50"
              value={uEmail}
              onChange={e => {
                setUEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <span>Password</span>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-50"
              value={uPwd}
              onChange={e => setUPwd(e.target.value)}
            />
          </div>
          <div>
            <button className="btn btn-primary rounded-0 w-25 d-block m-auto">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
