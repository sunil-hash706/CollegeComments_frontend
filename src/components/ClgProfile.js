import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ClgProfile = () => {
  const params = useParams();
  const { index } = params;
  const [colleges, setCollegs] = useState([]);

  useEffect(() => {
    getColleges();
  });
  const getColleges = async () => {
    let result = await fetch("http://localhost:5000/colleges");
    result = await result.json();
    console.log(result);
    for (let i = 0; i < result.length; i++) {
      if (result[i]._id === index) {
        setCollegs(result[i]);
      }
    }
  };

  return (
    <>
      <h1>{colleges.name}'s Profile</h1>
    </>
  );
};

export default ClgProfile;
