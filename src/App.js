import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import AddCollege from "./components/AddCollege";
import PrivateComponent from "./components/PrivateComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import CollegeList from "./components/CollegeList";
import ClgProfile from "./components/ClgProfile";
import UserProfile from "./components/UserProfile";
// import UserProfile from "./components/Review";
import Review from "./components/Review";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h1>Hi there Home will be here</h1>} />
            <Route path="/Colleges" element={<CollegeList />} />
            <Route path="/AddCollege" element={<AddCollege />} />

            <Route
              path="/Logout"
              element={<h1>Hi there Logout will be here</h1>}
            />
          </Route>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />

          <Route path="/Colleges/ClgProfile/:index" element={<ClgProfile />} />
          <Route path="/Colleges/Review/:index" element={<Review />} />
          <Route path="/Profile/:index" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
