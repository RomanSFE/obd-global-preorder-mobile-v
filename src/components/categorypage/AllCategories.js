import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './maincategory.css';

import classnames from "classnames";

import MainMenu from '../mainmenu/MainMenu.js';
import JustForYouSection from '../preorderpagesec/sections/JustForYouSection';

class AllCategories extends Component {

    // Top Bar Option
    constructor(props) {
        super(props);
    
        this.state = {
          prevScrollpos: window.pageYOffset,
          visible: true,
        };
      }

    
      // Adds an event listener when the component is mount.
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      // Remove the event listener when the component is unmount.
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      // Hide or show the menu.
      handleScroll = () => {
        const { prevScrollpos } = this.state;
    
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;
    
        this.setState({
          prevScrollpos: currentScrollPos,
          visible
        });
      };
    // Top Bar Option

    render() {
        return (
            <>
            <nav
                className={classnames("main-category-top-nav-menu", {
                "main-category-top-nav-menu-hidden": !this.state.visible
                })}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            
                            <div className="main-category-top-menu-iconn-sec-txt">
                            <Link to="/">
                                <span><i className="fa fa-chevron-left"></i></span>
                            </Link>
                                <span>All Categories</span>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
            
            {/* Top Banner Box Start */}
            <div className="obd-pre-order-category-section-web-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="obd-preorder-all-cat-boxx">
                                {/* Single Row Start */}
                                <div className="row pre-order-cat-box-exx-cat-ex-pd">
                                    {/* Single Cat start */}
                                    <div className="col-md-3 col-4">
                                        <div className="pre-order-section-categ-boxs-single-itm">
                                            <Link to="/kitchen-accessories">
                                                <div className="pre-order-section-categ-bx-single-txt-cont text-center">
                                                    <img src={require('../../assets/pre-order-kitchen-1.png')} alt="orponbd online shop"/>
                                                    <p>Kitchen Accessories</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single Cat end */}
                                    {/* Single Cat start */}
                                    <div className="col-md-3 col-4">
                                        <div className="pre-order-section-categ-boxs-single-itm">
                                            <Link to="/mens-fashion">
                                                <div className="pre-order-section-categ-bx-single-txt-cont text-center">
                                                    <img src={require('../../assets/pre-order-menn-2.png')} alt="orponbd online shop"/>
                                                    <p>Men's Fashion</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single Cat end */}
                                    {/* Single Cat start */}
                                    <div className="col-md-3 col-4">
                                        <div className="pre-order-section-categ-boxs-single-itm">
                                            <Link to="/womens-fashion">
                                                <div className="pre-order-section-categ-bx-single-txt-cont text-center">
                                                    <img src={require('../../assets/pre-order-womens-3.png')} alt="orponbd online shop"/>
                                                    <p>Women's Fashion</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single Cat end */}
                                </div>
                                {/* Single Row End */}

                                {/* Single Row Start */}
                                <div className="row pre-order-cat-box-exx-cat-ex-pd">
                                    {/* Single Cat start */}
                                    <div className="col-md-3 col-4">
                                        <div className="pre-order-section-categ-boxs-single-itm">
                                            <Link to="/baby-zone">
                                                <div className="pre-order-section-categ-bx-single-txt-cont text-center">
                                                    <img src={require('../../assets/pre-order-kitchen-1.png')} alt="orponbd online shop"/>
                                                    <p>Baby Zone</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single Cat end */}
                                    {/* Single Cat start */}
                                    <div className="col-md-3 col-4">
                                        <div className="pre-order-section-categ-boxs-single-itm">
                                            <Link to="/smart-watches">
                                                <div className="pre-order-section-categ-bx-single-txt-cont text-center">
                                                    <img src={require('../../assets/pre-order-menn-2.png')} alt="orponbd online shop"/>
                                                    <p>Smart Watches</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single Cat end */}
                                    {/* Single Cat start */}
                                    <div className="col-md-3 col-4">
                                        <div className="pre-order-section-categ-boxs-single-itm">
                                            <Link to="/mobile-accessories">
                                                <div className="pre-order-section-categ-bx-single-txt-cont text-center">
                                                    <img src={require('../../assets/pre-order-womens-3.png')} alt="orponbd online shop"/>
                                                    <p>Mobile Accessories</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single Cat end */}
                                </div>
                                {/* Single Row End */}

                                {/* Single Row Start */}
                                <div className="row pre-order-cat-box-exx-cat-ex-pd">
                                    {/* Single Cat start */}
                                    <div className="col-md-3 col-4">
                                        <div className="pre-order-section-categ-boxs-single-itm">
                                            <Link to="/home-and-living">
                                                <div className="pre-order-section-categ-bx-single-txt-cont text-center">
                                                    <img src={require('../../assets/pre-order-home-livv-4.png')} alt="orponbd online shop"/>
                                                    <p>Home & Living</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single Cat end */}
                                    {/* Single Cat start */}
                                    <div className="col-md-3 col-4">
                                        <div className="pre-order-section-categ-boxs-single-itm">
                                            <Link to="/accessories">
                                                <div className="pre-order-section-categ-bx-single-txt-cont text-center">
                                                    <img src={require('../../assets/pre-order-home-livv-4.png')} alt="orponbd online shop"/>
                                                    <p>Accessories</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Single Cat end */}
                                </div>
                                {/* Single Row End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Top Banner Box End */}

            <JustForYouSection/>

            <MainMenu/>
            </>
        );
    }
}

export default AllCategories;
