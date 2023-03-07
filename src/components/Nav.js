// import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    // console.log("Nikal mc");
    localStorage.clear();
    navigate("/SignUp");
  };
  let iduser = "/Profile/";
  let iduser1 = "/Profile/";
  const updateUrl = () => {
    const auth = localStorage.getItem("user");
    let x = JSON.parse(auth)._id;
    console.log(x);
    iduser = iduser1 + x;
    console.log(iduser);
  };
  console.log(iduser);

  return (
    <div className="App nav">
      <img
        alt="LOGO"
        className="logo-img"
        src="https://www.shutterstock.com/image-vector/fountain-pen-writing-word-review-260nw-1012410229.jpg"
      />
      <ul className="nav-li">
        {auth ? (
          <>
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/Colleges">Colleges </Link>
            </li>
            <li>
              <Link to="/AddCollege">Add College </Link>
            </li>
            <li onClick={updateUrl()}>
              <Link to={iduser}>Profile</Link>
            </li>
          </>
        ) : (
          <></>
        )}

        {auth ? (
          <li>
            <Link onClick={logout} to="/SignUp">
              Logout ({JSON.parse(auth).name})
            </Link>
          </li>
        ) : (
          <>
            <ul className="nav-right">
              <li>
                {" "}
                <Link to="/SignUp">SignUp</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
            </ul>
          </>
        )}
      </ul>
    </div>
  );
};

export default Nav;
