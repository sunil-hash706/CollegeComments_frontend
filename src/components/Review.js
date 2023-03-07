import react, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Review() {
  const params = useParams();
  const { index } = params;

  const [review, setReview] = useState("");
  const navigate = useNavigate();
  const [_pid, set_pid] = useState("");
  const [_cid, set_cid] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("user");
    let x = JSON.parse(auth)._id;
    console.log("Person id ", x);
    set_pid(x);
    set_cid(index);
  }, []);

  const handleSend = async () => {
    let result = await fetch("http://localhost:5000/Colleges/Review", {
      method: "post",
      body: JSON.stringify({ review: review, _pid: _pid, _cid: _cid }),
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
