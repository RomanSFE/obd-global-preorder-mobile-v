import React, { Component } from 'react';
import './prehomepage.css';

// Slider
import SliderCategory from '../slidersec/SliderCategory.js'

// Sections
import JustForYouSection from '../sections/JustForYouSection.js';

import MainMenu from '../../mainmenu/MainMenu.js';
import AllCategoryItems from '../sections/AllCategoryItems';
import Search from '../../search/Search';
import PreBannerSec from '../sections/PreBannerSec';

class PreHomePage extends Component {
    render() {
        return (
            <div className="homepage-mainn-sseectionx">
                <Search/>
                <PreBannerSec/>
                <SliderCategory/>
                <AllCategoryItems/>
                <JustForYouSection/>

                <MainMenu/>
            </div>
        );
    }
}

export default PreHomePage;
