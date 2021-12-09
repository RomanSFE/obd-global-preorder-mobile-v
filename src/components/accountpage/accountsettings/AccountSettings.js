import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './accountsettings.css';

import MainMenu from '../../mainmenu/MainMenu.js';

export default class AccountSettings extends Component {

     // Image Upload
     constructor(props) {
		super(props);

		this.state = {
            // Image Upload
            file: '',
            imagePreviewUrl: ''
            // Image Upload End
		};
        // Image Upload
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        // Image Upload End
	}
	handleClose() {
		this.setState({ show: false });
	}
	handleShow() {
		this.setState({ show: true });
	}
    // Image Upload

    // Image Upload
    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
      }
    
      _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }
    // Image Upload End
    
    render() {
        // Image Upload
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} alt=""/>);
        }
        // Image Upload

        return (
            <>
            <div className="main-category-top-nav-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to="/my-account-main">
                                <div className="main-category-top-menu-iconn-sec-txt">
                                    <span><i className="fa fa-chevron-left"></i> Account Settings</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Account Profile Start */}
            <div className="profile-pre-mv-info-section-main-box">
                {/* Account Setting Color  Start ------- */}
                <div className="profile-pre-mv-info-color-txtt">
                    <h4>Basic Information </h4>
                    <div className="profile-pre-mv-info-color-brdrr"></div>
                </div>
                {/* Account Setting Color  End ------- */}

                {/* Account info form start */}
                <div className="profile-pre-mv-info-form-bx-main">
                    <form action="">
                        <div className="row profile-pre-mv-info-form-input-ex-pdd">
                            <div className="col-md-3">
                                <div className="profile-pre-mv-info-form-input-left-txtt">
                                    <h4>Your Name:</h4>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="profile-pre-mv-info-form-input-right-input">
                                    <input type="text" placeholder="Full Name.." />
                                </div>
                            </div>
                        </div>
                        <div className="row profile-pre-mv-info-form-input-ex-pdd">
                            <div className="col-md-3">
                                <div className="profile-pre-mv-info-form-input-left-txtt">
                                    <h4>Profile Image:</h4>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="profile-pre-mv-info-form-input-right-input">
                                    {/* Image Upload */}
                                    <div className="obd-account-settingg-wv-bx--main-img-upld">
                                        <form onSubmit={this._handleSubmit}>
                                            <input type="file" onChange={this._handleImageChange} />
                                            <button type="submit" onClick={this._handleSubmit}>Choose Image File..</button>
                                        </form>
                                        {$imagePreview}
                                    </div>
                                    {/* Image Upload */}
                                </div>
                            </div>
                        </div>
                        <div className="row profile-pre-mv-info-form-input-ex-pdd">
                            <div className="col-md-3">
                                <div className="profile-pre-mv-info-form-input-left-txtt">
                                    <h4>Mobile No:</h4>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="profile-pre-mv-info-form-input-right-input">
                                    <input type="text" placeholder="Mobile No.." />
                                </div>
                            </div>
                        </div>
                        <div className="row profile-pre-mv-info-form-input-ex-pdd">
                            <div className="col-md-3">
                                <div className="profile-pre-mv-info-form-input-left-txtt">
                                    <h4>Address:</h4>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="profile-pre-mv-info-form-input-right-input">
                                    <textarea name="" id="" cols="30" rows="10" placeholder="Address Here.."></textarea>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row profile-pre-mv-info-form-btnz text-right">
                            <div className="col-md-12">
                                <div className="profile-pre-mv-info-form-btnz-sec">
                                    <button type="submit">Update Profile</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                {/* Account info form End */}
            </div>
            {/* Account Profile End */}

  
            <MainMenu/>
            </>
        )
    }
}
