import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './mycart.css';
import deletezz from '../../assets/deletezz.svg'

export default class MyCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
        // incress decress
            clicks: 0,
            show: true,
        // incress decress
        };
      }

      // Quantity incre decre
        IncrementItem = () => {
            this.setState({ clicks: this.state.clicks + 1 });
        }
        DecreaseItem = () => {
            this.setState({ clicks: this.state.clicks - 1 });
        }
    // Quantity incre decre
    render() {
        return (
            <>
            <div className="main-category-top-nav-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to="/">
                                <div className="main-category-top-menu-iconn-sec-txt">
                                    <span><i className="fa fa-chevron-left"></i> My Cart (5)</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-category-top-nav-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to="/product">
                                <div className="main-category-top-menu-iconn-sec-txt">
                                    <span><i className="fa fa-chevron-left"></i> Order Information</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Address section */}
            <div className="obd-user-cart-address-main-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="obd-pre-order-mcart-m-user-info-main-box">
                                <div className="obd-pre-order-mcart-m-user-info-hed-txt">
                                    <h3>Account Details.</h3>
                                </div>
                                <div className="obd-pre-order-mcart-m-user-info-form">
                                    <form action="">
                                        <div className="obd-p-order-cart-user--addr-input-field">
                                            <label htmlFor="name">Name :</label>
                                            <input type="text" name="name" placeholder="Enter your Name"/>
                                        </div>
                                        
                                        <div className="obd-p-order-cart-user--addr-input-field">
                                            <label htmlFor="phone">Mobile Number :</label>
                                            <input type="text" name="phone" placeholder="Enter your Mobile Number.."/>
                                        </div>

                                        <div className="obd-p-order-cart-user--addr-input-field">
                                            <label htmlFor="">Full Address :</label>
                                            <textarea name="" id="" cols="30" rows="10" placeholder="Address.."></textarea>
                                        </div>

                                        <div className="obd-p-order-cart-user--addr-input-field">
                                            <label htmlFor="">Select Area :</label>
                                            <select>
                                                <option value="" selected>--- Select Area ---</option>
                                                <option value="">Inside Dhaka</option>
                                                <option value="">Outside Dhaka</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Address section End */}
            
            <div className="product-page-full-wrp-collzr-sec">
                {/* Order Summary */}
                <div className="cart-order-summary-main-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="order-summary-hedd-ttxt">
                                    <h3>Order Summary</h3>
                                </div>
                            </div>
                        </div>
                            {/* Single Cart Item */}
                            <div className="my-cart-select-all-ex-ppdnfg-mn-bbox">
                                <div className="row my-cart-select-all-ex-ppdnfg">
                                    <div className="col-3">
                                        <div className="my-cart-select-vvb-immxg">
                                            <img src={require('../../assets/slide-1.jpg')} alt="OrponBD Online shop"/>
                                        </div>
                                    </div>
                                    <div className="col-9">
                                        <div className="my-cart-product-vvx-and-text-section">
                                            <p>Product details text...</p>
                                            <h5>Color: Black</h5>
                                            <h4>1250 TK</h4>

                                            <div className="my-cartproduct-vvx-delete-iixcn">
                                                <img src={deletezz} alt="OrponBD Online shop"/>
                                            </div>
                                            {/* incress decress */}
                                            <div className="my-cart-dfc-single-products-options-section-quantity-bbox">
                                                <ul>
                                                    <li><button onClick={this.DecreaseItem}>-</button></li>
                                                    <li className="incrementhhtwo-ttxt">{ this.state.show ? <h2>{ this.state.clicks }</h2> : '' }</li>
                                                    <li className="plusxsxts-bbtn"><button onClick={this.IncrementItem}>+</button></li>
                                                </ul>
                                            </div>
                                            {/* incress decress */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Single Cart Item */}
                            {/* Single Cart Item */}
                            <div className="my-cart-select-all-ex-ppdnfg-mn-bbox">
                                <div className="row my-cart-select-all-ex-ppdnfg">
                                    <div className="col-3">
                                        <div className="my-cart-select-vvb-immxg">
                                            <img src={require('../../assets/slide-2.jpg')} alt="OrponBD Online shop"/>
                                        </div>
                                    </div>
                                    <div className="col-9">
                                        <div className="my-cart-product-vvx-and-text-section">
                                            <p>Product details text...</p>
                                            <h5>Color: Black</h5>
                                            <h4>1250 TK</h4>

                                            <div className="my-cartproduct-vvx-delete-iixcn">
                                                <img src={deletezz} alt="OrponBD Online shop"/>
                                            </div>
                                            {/* incress decress */}
                                            <div className="my-cart-dfc-single-products-options-section-quantity-bbox">
                                                <ul>
                                                    <li><button onClick={this.DecreaseItem}>-</button></li>
                                                    <li className="incrementhhtwo-ttxt">{ this.state.show ? <h2>{ this.state.clicks }</h2> : '' }</li>
                                                    <li className="plusxsxts-bbtn"><button onClick={this.IncrementItem}>+</button></li>
                                                </ul>
                                            </div>
                                            {/* incress decress */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Single cart Item */}

                        {/* Item total price and delivery charge */}
                        <div className="product-summary-item-total-price-del-charge">
                            <div className="container">
                                <div className="row product-summv-total-ex-pzdd">
                                    <div className="col-12">
                                        <div className="product-summary-item-total-price-box text-right">
                                            <p>Item Total: <strong>1785 TK</strong></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-summary-item-total-del-chrrg-bxbx">
                                    <div className="row">
                                        <div className="col-9">
                                            <div className="product-summary-item-total-del-chrrg-bxbx-ttxt">
                                                <p>Delivery Charge:</p>
                                                <h6>Est Arrival Time: 1 - 2 Days</h6>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="product-summary-item-total-del-chrrg-bxbx-ttxt-quntty">
                                                <p>60 TK</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Item total price and delivery charge */}
                    </div>
                </div>
                {/* Order Summary */}

                <div className="order-summary-order-total-section-main-mobile">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="oreder-total-ffhednf-ttxt">
                                    <h4>Order Total</h4>
                                </div>
                                <div className="oreder-total-ffhednf-ttxt-single-productt-ittm">
                                    <ul>
                                        <li>Item sub total: <span className="hdjhdhfhj text-right">12540 TK</span></li>
                                        <li>Delivery Fee: <span className="hdjhdhfhj text-right">120</span></li>
                                    </ul>
                                </div>
                                {/* Item total */}
                                <div className="product-summary-item-total-payable-amt text-right">
                                    <p>Payable Amount: <strong>1785 TK</strong></p>
                                </div>
                                {/* Item total */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Total and confirm section */}
                <div className="product-summary-total-confirm-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="product-summary-total-confirm-section-total-ttxt">
                                    <p>Total: <span>12540 TK</span></p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="product-summary-total-confirm-section-con-ffn-btn">
                                    <Link to="/order-confirm-successful">
                                        Confirm Order
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Total and confirm section */}
            </div>
            </>
        )
    }
}
