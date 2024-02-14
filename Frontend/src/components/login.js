import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import MyNavbar from './navbar';
import Footer from './footer';


const Login = () => {
        //eslint-disable-next-line no-unused-vars
        const [values, setValues] = useState({
            username: "",
            password: "",
        });
        const [showAdditionalContent, setShowAdditionalContent] = useState(false);
        const [AdditionalContentbtn, setAdditionalContentbtn] = useState("+");
    
        const handleInput = (event) => {
            setValues((prev) => ({
                ...prev,
                [event.target.name]: event.target.value,
            }));
        };
    
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
        <div>
            <MyNavbar/>
                        <div className="d-md-flex justify-content-around m-5">
                <div className="col-md-5">
                    <div className="card bg-white shadow mb-3 ">
                        <div className="card-body">
                            <h4>NEW CUSTOMER</h4>
                            <hr />
                            <p style={{ color: '#646464' }} >By creating an account on our website, you will be able to shop faster, be up to date on an orders status, and keep track of the orders you have previously made.</p>
                            <Link to='/register' className='text-decoration-none'>
                                <button type='button' className='btn btn-primary'>Register</button>
                            </Link>
                        </div>
                    </div>
                    <div className="card bg-white shadow mb-3">
                        <div className="card-body ">
                            <div>
                                <h4>Why do you have to register? <span className='float-end' onClick={toggleAdditionalContent} style={{ cursor: 'pointer' }}>{AdditionalContentbtn}</span></h4>
                            </div>
                            {showAdditionalContent &&
                                <div>
                                    <hr/>
                                    Registration as a buyer is mandatory. To track your order and shipment status, or to reach out to you in case of any issues, we prefer you to register and create a buyer's account. The process takes less than a minute and will definitely prove to be beneficial in the long run; just enter a few basic details and you are good to go!
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card bg-white shadow mb-3">
                        <div className="card-body">
                            <h4>RETURNING CUSTOMER</h4>
                            <hr />
                            <form action="" method="post">
                                <div className="form-group p-2">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="User Name / Email"
                                        className="form-control"
                                        onChange={handleInput}
                                        required
                                    />
                                </div>
                                <div className="form-group p-2">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        className="form-control"
                                        required
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="d-flex justify-content-between p-1">
                                    <label>
                                        <input type='checkbox' />
                                        &nbsp;Remember me?
                                    </label>
                                    <a href="/">
                                        Forgot Password?
                                    </a>
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
            <Footer/>
        </div>
    );
};

export default Login;