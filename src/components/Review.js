import react, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Review() {
  const [review, setReview] = useState("");
  const navigate = useNavigate();
  const [_id, set_id] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("user");
    let x = JSON.parse(auth)._id;
    set_id(x);
  }, []);

  const handleSend = async () => {
    console.log(_id, review);
    let result = await fetch("http://localhost:5000/Colleges/Review/:id", {
      method: "post",
      body: JSON.stringify({ _id, review }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    // console.warn(result);
    localStorage.setItem("Reviews", JSON.stringify(result));
    if (result) {
      navigate("/");
    }
    console.log(_id, review);
  };
  return (
    <>
      <div className="box">
        <div className="container">
          <div className="input-field">
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="input"
              placeholder="Write your review"
              id=""
            />
            {/* <i className="bx bx-user"></i> */}
          </div>
          <br></br>
          <div className="input-field">
            <input
              type="submit"
              onClick={handleSend}
              className="submit"
              value="Send"
              id=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
