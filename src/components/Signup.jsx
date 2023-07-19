import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    let history=useNavigate()
  let uname = useRef(),
    uphno = useRef(),
    newPwd = useRef(),
    uEmail = useRef(),
    cpwd = useRef();
  let handleSignup = e => {
      e.preventDefault();
      let data = {
          userName: uname.current.value,
          userPhoneNumber: uphno.current.value,
          userEmail: uEmail.current.value,
          userPassword: newPwd.current.value,
          userConfirmPassword:cpwd.current.value
      }
      fetch("http://localhost:5005/data", {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(res => {
        if (res.ok) {
          history("/home");
        }
      });
      // console.log(data)
      // let item = localStorage.getItem("user")
      // item = JSON.parse(item)
      // item.push(data)
      // localStorage.setItem("user",JSON.stringify(item))
  };
  return (
    <div className="signupform d-flex justify-content-center">
      <div>
        <div className="signup">
          <h1>Create New Gmail Account</h1>
        </div>
        <div>
          <form onSubmit={handleSignup}>
            <div>
              <span>User Name</span>
              <input type="text" placeholder="Enter user-name" ref={uname} />
            </div>
            <div>
              <span>Create New Email-id</span>
              <input type="email" placeholder="Enter email" ref={uEmail} />
            </div>
            <div>
              <span>Phone Number</span>
              <input
                type="number"
                placeholder="Enter phonenumber"
                ref={uphno}
              />
            </div>
            <div>
              <span>Create New Password</span>
              <input
                type="text"
                placeholder="Enter new Password"
                ref={newPwd}
              />
            </div>
            <div>
              <span>Confirm Password</span>
              <input type="text" placeholder="Confirm pwd" ref={cpwd} />
            </div>
            <div>
              <button className="btn btn-primary rounded-0 w-25 d-block m-auto">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
