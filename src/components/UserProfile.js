import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const params = useParams();
  const { index } = params;
  const [user, setUser] = useState([]);

  useEffect(() => {
    getuser();
  });
  const getuser = async () => {
    let result = await fetch("http://localhost:5000/users");
    result = await result.json();
    console.log(result);
    for (let i = 0; i < result.length; i++) {
      if (result[i]._id === index) {
        setUser(result[i]);
      }
    }
  };

  console.log(user);
  return (
    <>
      <div className="left-profile-container">
        <div className="profile-container">
          <div className="img-container">
            <img src="./images/img.jpg" alt="profile pic" />
          </div>
          <p className="info full-name">{user.name}</p>
          <p className="info role">
            <i className="fas fa-star"></i>
            UX/UI Developer
          </p>
          <p className="info place">
            <i className="fas fa-map-marker-alt"></i>
            Milan, Italy
          </p>

          <div className="posts-info">
            <p>
              <span>336</span> Posts
            </p>
            <p>
              <span>4300</span> Likes
            </p>
            <p>
              <span>87</span> Works
            </p>
          </div>

          <div className="social-container">
            <button className="youtube">
              <i className="fab fa-youtube"></i>
            </button>
            <button className="linkedin">
              <i className="fab fa-linkedin-in"></i>
            </button>
            <button className="instagram">
              <i className="fab fa-instagram"></i>
            </button>
            <button className="github">
              <i className="fab fa-github"></i>
            </button>
          </div>

          {/* <button className="action">Follow</button> */}
          {/* <button className="action message">Message</button> */}
        </div>
      </div>
      <div className="right-review-section">
        <section className="review">
          <h1>Reviews</h1>

          <div className="cards">
            <div className="card">
              <div className="card__shap">
                <img
                  src="img/persion-1.jpg"
                  alt="person 1"
                  className="card__img"
                />
                <figcaption className="card__caption">Jhon Doe</figcaption>
              </div>

              <div className="card__text">
                <h3>Fuga eius distinctio consectetur possimus.</h3>

                <p>
                  Eos commodi, neque harum nam, beatae consequatur, provident
                  nulla nihil necessitatibus asperiores natus rerum in.
                  Voluptatibus similique numquam eaque voluptatem magni
                  asperiores, officia consequatur ab cum nobis voluptas a totam
                  repellendus animi.
                </p>
              </div>
            </div>

            
          </div>
        </section>
      </div>
    </>
  );
};

export default UserProfile;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const userProfile = () => {
//   const params = useParams();
//   const { index } = params;
//   const [user, setuser] = useState([]);

//   useEffect(() => {
//     getuser();
//   }, []);
//   const getuser = async () => {
//     let result = await fetch("http://localhost:5000/users");
//     result = await result.json();
//     console.log(result);
//     for (let i = 0; i < result.length; i++) {
//       if (result[i]._id == index) {
//         setuser(result[i]);
//       }
//     }
//   };
//   return (
// <>
//   <div classNameName="card-container">
//     <div classNameName="upper-container">
//       <div classNameName="image-container">
//         <img src="profile.jpg" />
//       </div>
//     </div>
//     <div classNameName="lower-container">
//       <div>
//         <h3>Alaina Wick</h3>
//         <h4>Front-end Developer</h4>
//       </div>
//       <div>
//         <p>
//           sodales accumsan ligula. Aenean sed diam tristique, fermentum mi
//           nec, ornare arch.
//         </p>
//       </div>
//       <div>
//         <a href="#" classNameName="btn">
//           View profile
//         </a>
//       </div>
//     </div>
//   </div>
// </>
//   );
// };

// export default userProfile;
