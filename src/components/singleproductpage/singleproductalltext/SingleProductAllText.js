import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './singleproductalltext.css';
import supermarket from '../../../assets/supermarket.svg'

export default class SingleProductAllText extends Component {

    render() {

        return (
            <>
            {/* Price section */}
            <div className="single-product-page-mobile-price-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-product-price-xtt-left-sec">
                                <p> <span>1250 TK</span> <del><span className="old-price-xxc">1500 - 1600 TK</span></del></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Price section */}

            {/* Product details text */}
            <div className="single-product-page-m-product-details-text">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-product-page-m-product-det-text-box">
                                <p>2018 Mens Polarized Night Driving Sunglasses Men Brand
                                    Designer Yellow Lens Night Vision</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Product details text */}

            {/* Product details Description Start */}
            <div className="single-product-page-m-product-desc">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-product-page-m-product-desc-text">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Sed quis dignissimos nobis repudiandae praesentium
                                    aspernatur! Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Placeat officia minima culpa molestiae, consectetur voluptates.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Product details Description End */}

            {/* Buy Now and Add to cart Butto single product page */}
            <div className="buy-now-and-add-to-cart-page-mobile-v-single-prodcpg">
                <div className="container">
                    <div className="row buy-now-and-add-to-cart-page-mobile-extra-ppxdc">
                        <div className="col-10">
                           <div className="buy-now-and-add-to-cart-page-mobile-buy-now-bbtn text-center">
                               <Link to="/my-cart">
                                    Buy Now
                               </Link>
                            </div> 
                        </div>
                        <div className="col-2">
                            <div className="buy-now-and-add-to-cart-page-mobile-cart-icon-bbtn">
                               <Link to="#">
                                    <img src={supermarket} alt="orponbd preorder"/>
                               </Link>
                               <p>17</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Buy Now and Add to cart Butto single product page */}
            </>
        )
    }
}
