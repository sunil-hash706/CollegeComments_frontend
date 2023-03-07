import react, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setemail] = useState("");
  const navigate = useNavigate();
  const [password, setpassword] = useState("");

  useEffect(() => {
    let auth = localStorage.getItem("user");
    if (auth) navigate("/");
  }, []);
  const handleLogin = async () => {
    console.log(email, password);
    let result = await fetch("http://localhost:5000/Login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("please enter correct password");
    }
  };
  return (
    <div className="box">
      <div className="container">
        <div className="top">
          <span>Have an account?</span>
          <header>Login</header>
        </div>

        <div className="input-field">
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            className="input"
            placeholder="Email"
            id=""
          />
          {/* <i className="bx bx-user"></i> */}
        </div>

        <div className="input-field">
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="Password"
            className="input"
            placeholder="Password"
            id=""
          />
          {/* <i className="bx bx-lock-alt"></i> */}
        </div>
        <br></br>
        <div className="input-field">
          <input
            onClick={handleLogin}
            type="submit"
            className="submit"
            value="Login"
            id=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
