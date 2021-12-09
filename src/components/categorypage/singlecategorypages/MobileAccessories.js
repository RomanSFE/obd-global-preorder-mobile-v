import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MainMenu from '../../mainmenu/MainMenu';
import Search from '../../search/Search';
import './singlecategorypages.css'

class MobileAccessories extends Component {
    render() {
        return (
            <>
            <Search/>

            {/* Mobile Accessories Start */}
            <div className="pre-order-all-category-pages-main-wrp">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="pre-order-all-category-pg-secton-bxz">
                                <div className="pre-order-all-category-pg-hd-txt">
                                    <p>Mobile Accessories For You</p>
                                </div>
                                {/* Single item */}
                                <div className="row preorder-all-category-pg-ex-padd">
                                    <div className="col-6">
                                        <div className="preorder-all-category-pg-sngl-prodct">
                                            <Link to="/#">
                                                <div className="preorder-all-category-pg-sngl-prodct-img">
                                                    <img src={require('../../../assets/slide-1.jpg')} alt="OrponBD Global Collections"/>
                                                </div>
                                                <div className="preorder-all-category-pg-sngl-prodct-ttxt">
                                                    <p>Product details text here Max Two Lines...</p>
                                                </div>
                                                <div className="preorder-all-category-pg-sngl-prodct-price-ttxt">
                                                    <h4>750 TK</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="preorder-all-category-pg-sngl-prodct">
                                            <Link to="/#">
                                                <div className="preorder-all-category-pg-sngl-prodct-img">
                                                    <img src={require('../../../assets/slide-2.jpg')} alt="orponbd global products"/>
                                                </div>
                                                <div className="preorder-all-category-pg-sngl-prodct-ttxt">
                                                    <p>Product details text here Max Two Lines...</p>
                                                </div>
                                                <div className="preorder-all-category-pg-sngl-prodct-price-ttxt">
                                                    <h4>750 TK</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Single item */}
                                {/* Single item */}
                                <div className="row preorder-all-category-pg-ex-padd">
                                    <div className="col-6">
                                        <div className="preorder-all-category-pg-sngl-prodct">
                                            <Link to="/#">
                                                <div className="preorder-all-category-pg-sngl-prodct-img">
                                                    <img src={require('../../../assets/slide-2.jpg')} alt="Orponbd global"/>
                                                </div>
                                                <div className="preorder-all-category-pg-sngl-prodct-ttxt">
                                                    <p>Product details text here Max Two Lines...</p>
                                                </div>
                                                <div className="preorder-all-category-pg-sngl-prodct-price-ttxt">
                                                    <h4>750 TK</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="preorder-all-category-pg-sngl-prodct">
                                            <Link to="/#">
                                                <div className="preorder-all-category-pg-sngl-prodct-img">
                                                    <img src={require('../../../assets/slide-3.jpg')} alt="Orponbd global collections"/>
                                                </div>
                                                <div className="preorder-all-category-pg-sngl-prodct-ttxt">
                                                    <p>Product details text here Max Two Lines...</p>
                                                </div>
                                                <div className="preorder-all-category-pg-sngl-prodct-price-ttxt">
                                                    <h4>750 TK</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Single item */}
                                {/* View More Button */}
                                <div className="row just-for-ypou-view-more-btn text-center">
                                    <div className="col-md-12">
                                        <div className="obd-global-preorder-view-m-ct-lnk">
                                            <button type="button">View More</button>
                                        </div>
                                    </div>
                                </div>
                                {/* View More Button */}
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            {/* Kitchen Accessories End */}

            <MainMenu/>
            </>
        );
    }
}

export default MobileAccessories;
