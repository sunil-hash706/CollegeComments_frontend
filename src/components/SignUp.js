import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const collectData = async () => {
    if (password != cnfPassword) {
      alert("Password does not match");
    } else {
      let result = await fetch("http://localhost:5000/register", {
        method: "post",
        body: JSON.stringify({ name, email, password, cnfPassword }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      console.warn(result);
      localStorage.setItem("user", JSON.stringify(result));
      if (result) {
        navigate("/");
      }
    }
  };

  return (
    <div className="box">
      <div className="container">
        <div className="input-field">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="input"
            placeholder="Name"
            id=""
            required
          ></input>
          {/* <i className="bx bx-user"></i> */}
        </div>

        <div className="input-field">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="input"
            placeholder="Email"
            id=""
            required
          />
          {/* <i className="bx bx-user"></i> */}
        </div>

        <div className="input-field">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="Password"
            className="input"
            placeholder="Password"
            id=""
            required
          />
          {/* <i className="bx bx-lock-alt"></i> */}
        </div>

        <div className="input-field">
          <input
            value={cnfPassword}
            onChange={(e) => setCnfPassword(e.target.value)}
            type="Password"
            className="input"
            placeholder="Confirm Password"
            id=""
            required
          />
          {/* <i className="bx bx-lock-alt"></i> */}
        </div>
        <br></br>
        <div className="input-field">
          <input
            onClick={collectData}
            type="submit"
            className="submit"
            value="Sign Up"
            id=""
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
