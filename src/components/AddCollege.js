import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCollege = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [logo, setLogo] = useState("");
  const [background, setBackground] = useState("");
  const navigate = useNavigate();
  const collectData = async () => {
    let result = await fetch("http://localhost:5000/add-college", {
      method: "post",
      body: JSON.stringify({ name, city, logo, background }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    // console.warn(result);
    localStorage.setItem("college", JSON.stringify(result));
    if (result) {
      navigate("/");
    }
  };
  return (
    // <div className="add-college">
    //   <h2>Add College only if it does not exist on the site</h2>
    //   <input
    //     type="text"
    //     value={name}
    //     onChange={(e) => setName(e.target.value)}
    //     placeholder="Name"
    //   />
    //   <br></br>
    //   <br></br>

    //   <input
    //     type="city"
    //     value={city}
    //     onChange={(e) => setCity(e.target.value)}
    //     placeholder="City"
    //   />

    //   <br></br>
    //   <h3>Logo</h3>
    //   <input
    //     type="file"
    //     value={logo}
    //     onChange={(e) => setLogo(e.target.value)}
    //     placeholder="Logo"
    //   />
    //   <br></br>
    //   <h3>Background Image</h3>
    //   <input
    //     type="file"
    //     value={background}
    //     onChange={(e) => setBackground(e.target.value)}
    //     placeholder="Background image"
    //   />
    //   <br></br>

    //   <button onClick={collectData} type="button">
    //     Add College
    //   </button>
    // </div>

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
          />
          <i className="bx bx-user"></i>
        </div>

        <div className="input-field">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            className="input"
            placeholder="City"
            id=""
          />
          <i className="bx bx-user"></i>
        </div>

        <div className="input-field">
          <span>Logo of college</span>
          <input
            type="file"
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
            placeholder="Logo"
          />
          {/* <i className="bx bx-user"></i> */}
        </div>

        <div className="input-field">
          <span>Background Image</span>
          <input
            type="file"
            value={background}
            onChange={(e) => setBackground(e.target.value)}
            placeholder="Background image"
          />
          {/* <i className="bx bx-lock-alt"></i> */}
        </div>
        <br></br>

        <div className="input-field">
          <input
            onClick={collectData}
            type="submit"
            className="submit"
            value="Add College"
            id=""
          />
        </div>
      </div>
    </div>
  );
};

export default AddCollege;
