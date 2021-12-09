import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ExtraSec extends Component {
    render() {
        return (
            <div className="extraax-sess">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ghgghh">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/singleproductpage">Single product page</Link></li>
                                    <li><Link to="/more-review-page">More Review Page</Link></li>
                                    <li><Link to="/empty-cart">Empty Cart</Link></li>
                                    <li><Link to="/my-cart">My Cart</Link></li>
                                    <li><Link to="/wishlist">My Wishlist</Link></li>
                                    <li><Link to="/product-not-found">Product Not Found</Link></li>
                                    <li><Link to="/main-category">Main category</Link></li>
                                    <li><Link to="/sub-category">Main category</Link></li>
                                    <li><Link to="/single-category-product">Single Category Product</Link></li>
                                    <li><Link to="/single-category-product-two-column">Single Category Product two column</Link></li>
                                    <li><Link to="/payment-with-shipping-button">Payment With Shipping Button</Link></li>
                                    <li><Link to="/shipping-address">Shipping Address</Link></li>
                                    <li><Link to="/payment-product-page">Payment Product Page</Link></li>
                                    <li><Link to="/payment-proceed">Payment Proceed</Link></li>
                                    <li><Link to="/signup-registration">Signup and Registration</Link></li>
                                    <li><Link to="/complete-profile">Complete Profile</Link></li>
                                    <li><Link to="/register-with-email">Register with Email</Link></li>
                                    <li><Link to="/card-payment">Card Payment</Link></li>
                                    <li><Link to="/my-account-main">My Account</Link></li>
                                    <li><Link to="/my-wallet">My Wallet</Link></li>
                                    <li><Link to="/help-and-support">Help and Support</Link></li>
                                    <li><Link to="/privacy-policy">Privacy and Policy</Link></li>
                                    <li><Link to="/terms-conditions">Terms and Conditions</Link></li>
                                    <li><Link to="/about-us">About Us</Link></li>
                                    <li><Link to="/forget-password-email-phone">Forget Password Email Send</Link></li>
                                    <li><Link to="/forget-password">Forget Password</Link></li>
                                    <li><Link to="/accounts-settings">Account Settings</Link></li>
                                    <li><Link to="/pre-order">Pre Order</Link></li>
                                    <li><Link to="/manage-review">Manage Review</Link></li>
                                    <li><Link to="/address-book">Address Book</Link></li>
                                    <li><Link to="/bkash-payment">Bkash Payment</Link></li>
                                    <li><Link to="/order-confirm-successful">Order Confirm Successful</Link></li>
                                    <li><Link to="/cancel-order-page">Cancel Order Page</Link></li>

                                    <li><Link to="/all-orders-product">All Orders Products</Link></li>
                                    <li><Link to="/pending-orders">Pending Orders</Link></li>
                                    <li><Link to="/awaiting-page">Awaiting Page</Link></li>
                                    <li><Link to="/ready-to-ship">Ready to Ship</Link></li>
                                    <li><Link to="/cancel-orders">Cancelled Order</Link></li>

                                    <li><Link to="/my-account-without-login">My Account Without Login</Link></li>

                                    <li><Link to="/invoice-page">Invoice Page</Link></li>

                                    {/* PreOrder Page Section */}
                                    <li><Link to="/pre-order-home-page">Pre Order Home</Link></li>
                                    {/* PreOrder Page Section */}

                                    {/* Pre Order Cart */}
                                    <li><Link to="/pre-order-cart">Pre Order Cart</Link></li>
                                    {/* Pre Order Cart */}

                                    {/* Extra */}
                                    <li><Link to="/test-extra">Test Extra</Link></li>
                                    {/* Extra */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
