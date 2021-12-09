import React, { Component } from 'react'
import './prebannersec.css'

export default class PreBannerSec extends Component {
    render() {
        return (
            <div className="pre-order-banner-top-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="pre-order-banner-top-box-img">
                                <img src={require('../../../assets/slide-5.jpg')} alt="OrponBD Global"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
