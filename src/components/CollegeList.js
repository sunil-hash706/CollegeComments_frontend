import{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
const CollegeList = () => {
  const [colleges, setCollegs] = useState([]);
  useEffect(() => {
    getColleges();
  }, []);

  const getColleges = async () => {
    let result = await fetch("http://localhost:5000/colleges");
    result = await result.json();
    setCollegs(result);
  };
  let url1 = "/Colleges/ClgProfile/";
  let url = "/Colleges/ClgProfile";
  const urlupdate = (index) => {
    JSON.stringify(index);
    url = url1 + index;
  };
  return colleges.map((item, index) => (
    <>
      <div className="container">
        <div className="products-container">
          <div className="product" data-name="p-1">
            <img src="images/1.png" alt="" />
            <h3 onClick={urlupdate(item._id)}>
              <Link to={url}>
                {" "}
                {index + 1} {item.name}
              </Link>
            </h3>
            <div className="price">{item.city}</div>
          </div>
        </div>
      </div>

      <div className="products-preview">
        <div className="preview" data-target="p-5">
          <i className="fas fa-times"></i>
          <img src="images/5.png" alt="" />
          <h3>organic broccoli</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <span>( 250 )</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, dolorem.
          </p>
          <div className="price">$2.00</div>
          <div className="buttons">
            {/* <a href="#" className="buy">
              buy now
            </a>
            <a href="#" className="cart">
              add to cart
            </a> */}
          </div>
        </div>
      </div>
    </>
  ));
};

export default CollegeList;
