import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './myaccountmainpage.css';

import MainMenu from '../mainmenu/MainMenu.js';
import JustForYou from '../allsections/justforyou/JustForYou.js'

export default class MyAccountMainPage extends Component {

    render() {
        return (
            <>
            <div className="myaccount-mainpage-ttop-sectioon">
                <div className="preorder-page-mv-profile-info-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <div className="preorder-page-mv-profile-info-section-immg">
                                    <img src={require('../../assets/product-9.jpg')} alt="orponbd preorder"/>
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="preorder-page-mv-profile-info-section-ttxt">
                                    <h4>User Name</h4>
                                    <p>useremailadd@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* All Order Start */}
                <div className="obd-preorder-profile-accnt-allz-content-boxx">
                    <div className="obd-preorder-profile-accnt-allz-tbl-ordr-main-box">
                        <div className="obd-preorder-profile-accnt-allz-content-hed">
                            <h4>My Orders</h4>
                        </div>
                        {/* Table Box start */}
                        <div className="obd-preorder-profile-accnt-allz-wv-table-box">
                            <table className="table table-bordered">
                                <thead style={{borderRadius: '8px'}}>
                                    <tr>
                                        <th style={{borderTopLeftRadius: '8px',borderBottomLeftRadius: '8px', width: '65%'}} scope="col col-6">Product Name</th>
                                        <th style={{textAlignLast: 'center'}} scope="col col-6">Qty</th>
                                        <th style={{borderTopRightRadius: '8px',borderBottomRightRadius: '8px', textAlignLast: 'center'}} scope="col col-6">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* single Item start */}
                                    <tr>
                                        <td>
                                            <div className="obd-preorder-profile-accnt-allz-img-txt-main">
                                                <div className="row obd-preorder-profile-accnt-allz-ttbl-eex-ppd">
                                                    <div className="col-3">
                                                        <div className="obd-preorder-profile-accnt-snglz-img-prd">
                                                            <img src={require('../../assets/more-all-products-1.png')} alt=""/>
                                                        </div>
                                                    </div>
                                                    <div className="col-9">
                                                        <div className="obd-preorder-profile-accnt-snglz-img-prd-txxt">
                                                            <Link to="/">Two Line Max Two Line Max...</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td style={{textAlign: 'center'}}>
                                            2
                                        </td>
                                        
                                        <td style={{textAlign: 'center'}}>
                                            <div className="obd-preorder-profile-accnt-snglz-prd-prc">
                                                <h4><span>৳</span> 500</h4>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* Single Item End */}

                                    {/* single Item start */}
                                    <tr>
                                        <td>
                                            <div className="obd-preorder-profile-accnt-allz-img-txt-main">
                                                <div className="row obd-preorder-profile-accnt-allz-ttbl-eex-ppd">
                                                    <div className="col-3">
                                                        <div className="obd-preorder-profile-accnt-snglz-img-prd">
                                                            <img src={require('../../assets/more-all-products-3.png')} alt=""/>
                                                        </div>
                                                    </div>
                                                    <div className="col-9">
                                                        <div className="obd-preorder-profile-accnt-snglz-img-prd-txxt">
                                                            <Link to="/">Two Line max, Two Line Max...</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td style={{textAlign: 'center'}}>
                                            5
                                        </td>
                                        
                                        <td style={{textAlign: 'center'}}>
                                            <div className="obd-preorder-profile-accnt-snglz-prd-prc">
                                                <h4><span>৳</span> 2500</h4>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* Single Item End */}
                                </tbody>
                            </table>

                            {/* Pagination Start */}
                            <div className="row obd-preorder-mv-pagination-section text-right">
                                <div className="col-md-12">
                                    <div className="obd-preorder-mv-pagination-section-box">
                                        <div className="obd-preorder-mv-pagination-section-content">
                                            <ul>
                                                <li className="obd-preorder-mv-pagntn-prev-txt-mv"><Link to="/"><span><i className="fas fa-angle-left"></i></span></Link></li>
                                                <li><Link to="/">1</Link></li>
                                                <li><Link to="/">2</Link></li>
                                                <li><Link to="/">3</Link></li>
                                                <li><Link to="/">4</Link></li>
                                                <li><Link to="/">5</Link></li>
                                                <li className="obd-preorder-mv-pagntn-nxt-txt-mv"><Link to="/"> <span><i className="fas fa-angle-right"></i></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Pagination End */}
                        </div>
                        {/* Table Box End */}
                    </div>
                </div>
                {/* All Order End */}

                {/* When Empty Order, This section show */}
                {/* <div className="obd-preorder-profile-accnt-content-o-empty-img text-center">
                    <img src={require('../../assets/my-order-profile-empty-order.png')} alt="orponbd preorder"/>
                    <div className="obd-preorder-profile-accnt-content-o-empty-img-txt text-center">
                        <p>No Order Yet</p>
                    </div>
                </div> */}
                {/* When Empty Order, This section show */}


                {/* Account Settings all Section */}
                <div className="myacnt-preorder-nav-link-sections-mv-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="myacnt-preorder-nav-link-sections-mv-boxx">
                                    <Link to="/accounts-settings">
                                        <div className="myacnt-preorder-nav-link-mvv-single">
                                            <span className="acc-wisshlst-icn-cls"><img src={require('../../assets/account-settings-11.png')} alt="orponbd Online shop"/></span>
                                            <p>Account Settings</p>
                                            <span className="account-mv-an-rg-icon"><i className="fas fa-angle-right"></i></span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Account Settings all Section */}

                {/* Just for you section */}
                <div className="myy-account-just-for-youu-secctbn">
                    <JustForYou/>
                </div>
                {/* Just for you section */}

            </div>

            <MainMenu/>
            </>
        )
    }
}
