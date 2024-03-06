import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyNavbar from "./navbar";
import Footer from "./footer";
// import axios from 'axios'
// import {useData} from './CartContext';
// import { state } from "../../../Backend/db";

const Login = () => {

  const [userType, setUserType] = useState('customer')
	const [email, setEmail] = useState('ravi@gmail.com')
	const [password, setPassword] = useState('Ravi@123')

  const handleUserTypeChange = (event) => {
		setUserType(event.target.value)

		// Set default values based on user type
		if (event.target.value === 'customer') {
			setEmail('ravi@gmail.com')
			setPassword('Ravi@123')
		} else {
			setEmail('admin@admin')
			setPassword('admin')
		}
	}
  sessionStorage.clear();
  // const {setUserData} = useData();
  //eslint-disable-next-line no-unused-vars
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);
  const [AdditionalContentbtn, setAdditionalContentbtn] = useState("+");

  // const handleInput = (event) => {
  //   setValues((prev) => ({
  //     ...prev,
  //     [event.target.name]: event.target.value,
  //   }));
  // };
  
  const navigate = useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault()
    if (userType === 'customer') {
      sessionStorage.setItem("token","loggedin")
      sessionStorage.removeItem('user-token');
      sessionStorage.setItem('user-token', "Ravi");
      navigate('/');
    } else if (userType === 'admin') {
      sessionStorage.setItem("token","loggedin")
      sessionStorage.removeItem('user-token');
      sessionStorage.setItem('user-token', "Admin");
      navigate('/adminproducts');
    }

    // axios
    // .post("http://localhost:8080/user", values)
    //   .then((res) => {
        // sessionStorage.setItem("token","loggedin")
        // if (res.data !== "Fail"  && res.data !== "Error") {
        //   const data = res.data[0];
        //   setUserData(data);
        //   const token = data.user_id;
        //   if (!token) {
        //     alert('Unable to login. Please try after some time.');
        //     return;
        //   }
        //   sessionStorage.removeItem('user-token');
        //   sessionStorage.setItem('user-token', token);
        //   navigate("/");
        // } else {
        //   alert("Invalid Username or Password");
        //   window.location.reload(false);
        // }
//       })
//       .catch((err) => console.log(err));
}

  const toggleAdditionalContent = () => {
    if (showAdditionalContent) {
      setShowAdditionalContent(false);
      setAdditionalContentbtn("+");
    } else {
      setShowAdditionalContent(true);
      setAdditionalContentbtn("-");
    }
  };
  return (
    <div className="fullscreen">
      <MyNavbar />
      <main>
      <div className="d-md-flex justify-content-around m-lg-5 m-md-5 m-4">
        <div className="col-md-5">
          <div className="card bg-white shadow mb-3 ">
            <div className="card-body">
              <h4>NEW CUSTOMER</h4>
              <hr />
              <p style={{ color: "#646464" }}>
                By creating an account on our website, you will be able to shop
                faster, be up to date on an orders status, and keep track of the
                orders you have previously made.
              </p>
              <Link to="/register" className="text-decoration-none">
                <button type="button" className="btn btn-primary">
                  Register
                </button>
              </Link>
            </div>
          </div>
          <div className="card bg-white shadow mb-3">
            <div className="card-body ">
              <div>
                <h4>
                  Why do you have to register?{" "}
                  <span
                    className="float-end"
                    onClick={toggleAdditionalContent}
                    style={{ cursor: "pointer" }}
                  >
                    {AdditionalContentbtn}
                  </span>
                </h4>
              </div>
              {showAdditionalContent && (
                <div>
                  <hr />
                  Registration as a buyer is mandatory. To track your order and
                  shipment status, or to reach out to you in case of any issues,
                  we prefer you to register and create a buyer's account. The
                  process takes less than a minute and will definitely prove to
                  be beneficial in the long run; just enter a few basic details
                  and you are good to go!
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card bg-white shadow mb-3">
            <div className="card-body">
              <h4>RETURNING CUSTOMER</h4>
              <hr />
              <form action="" method="post" onSubmit={handleSubmit}>
              <div className="d-flex gap-5">
                    <div className="d-flex">
                      {/* <input
                        type="radio"
                        name="selectedlogin"
                        id="customer"
                        value="customer"
                        onChange={handleInput}
                        required
                      /> */}
                      <input
					type="radio"
					id="customer"
					name="userType"
					value="customer"
					checked={userType === 'customer'}
					onChange={handleUserTypeChange}
				/>
                      &nbsp;
                      <h6>CUSTOMER</h6>
                    </div>
                    <div className="d-flex">
                      {/* <input
                        type="radio"
                        name="selectedlogin"
                        id="admin"
                        value="admin"
                        onChange={handleInput}
                        required
                      /> */}
                      <input
					type="radio"
					id="admin"
					name="userType"
					value="admin"
					checked={userType === 'admin'}
					onChange={handleUserTypeChange}
				/>
                      &nbsp;
                      <h6>ADMIN</h6>
                    </div>
                  </div>
                  <hr />
                <div className="form-group p-2">
                  {/* <label htmlFor="username">Email</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="User Name / Email"
                    className="form-control"
                    onChange={handleInput}
                    required
                  /> */}
                  <label>Email:</label>
				<input
					type="text"
					value={email}
          className="form-control"
					onChange={(e) => setEmail(e.target.value)}
					readOnly={userType === 'admin'}
				/>
                </div>
                <div className="form-group p-2">
                  {/* <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    required
                    onChange={handleInput}
                  /> */}
                  <label>Password:</label>
				<input
					type="password"
					value={password}
          className="form-control"
					onChange={(e) => setPassword(e.target.value)}
					readOnly={userType === 'admin'}

				/>
                </div>
                <div className="d-flex justify-content-between p-1">
                  <label>
                    <input type="checkbox" id="checkme" name="checkme"/>
                    &nbsp;Remember me?
                  </label>
                  <a href="/">Forgot Password?</a>
                </div>
                <div>
                  <button
                    type="submit"
                    name="btn-login"
                    className="btn btn-primary "
                  >
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
