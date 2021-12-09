import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './signupandregistration.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import UserOtp from './userotp/UserOtp';


export default class SignupAndRegistration extends Component {
    render() {
        return (
            <>
            <div className="main-category-top-nav-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to="/">
                                <div className="main-category-top-menu-iconn-sec-txt">
                                    <span><i className="fa fa-chevron-left"></i> Sign In or Registration</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-register-page-xxccttn">
                <div className="singup-and-registration-page-main-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="singup-and-register-sec-main-content-bbox">
                                    <Tabs defaultActiveKey="signin" id="uncontrolled-tab-example">
                                        <Tab eventKey="signin" title="Sign In">
                                            <div className="singin-reg-signin-secrion-mob-vv">
                                                <form action="">
                                                    <div className="singin-reg-signin-secrion-mob-vv-input-bboox">
                                                        <input type="text" placeholder="Enter Phone Number.."/> <span><button type="submit">Send OTP</button></span>
                                                    </div>

                                                    {/* OTP Section Show, After OTP Send */}
                                                    <UserOtp/>

                                                    <div className="singin-reg-signin-secrion-mob-vv-signin-bbuttnn">
                                                        <button>Sign In</button>
                                                    </div>
                                                </form>
                                                
                                            </div>
                                        </Tab>

                                        {/* Register section */}
                                        <Tab eventKey="register" title="Register">
                                            <div className="singin-reg-registerxx-secrion-mob-vv">
                                                <form action="">
                                                    <div className="singin-reg-registerxx-secrion-mob-vv-input-bboox">
                                                        <input type="text" placeholder="Enter Your Name.."/>
                                                    </div>
                                                    <div className="singin-reg-registerxx-secrion-mob-vv-input-bboox">
                                                        <input type="text" placeholder="Phone Number"/>
                                                    </div>
                                                    <div className="singin-reg-registerxx-secrion-mob-vv-regg-bbuttnn">
                                                        <button type="submit">Create Account</button>
                                                    </div>
                                                </form>

                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
