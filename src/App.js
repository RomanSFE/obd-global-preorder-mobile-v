import React from 'react';
import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Extrasss

// Single product page
import SingleProductPage from './components/singleproductpage/SingleProductPage.js'

// My Cart page
import MyCart from './components/mycartpage/MyCart.js'

// Main Category page
import AllCategories from './components/categorypage/AllCategories.js'

// Signup and Registration
import SignupAndRegistration from './components/signupandregistration/SignupAndRegistration.js'

// Main Account Page
import MyAccountMainPage from './components/accountpage/MyAccountMainPage.js'

// Account Settings Page
import AccountSettings from './components/accountpage/accountsettings/AccountSettings.js'

// Order Confirm Successful Page
import OrderConfirmSuccesful from './components/mycartpage/orderconfirmsuccessfulpage/OrderConfirmSuccesful.js'

// Invoice Page
import InvoicePage from './components/invoicepage/InvoicePage.js'

// PreOrder Page Section
import PreHomePage from './components/preorderpagesec/home/PreHomePage.js'
// PreOrder Page Section

// All Category Pages
import KitchenAccessories from './components/categorypage/singlecategorypages/KitchenAccessories';
import MensFashion from './components/categorypage/singlecategorypages/MensFashion';
import WomensFashion from './components/categorypage/singlecategorypages/WomensFashion';
import HomeAndLiving from './components/categorypage/singlecategorypages/HomeAndLiving';
import BabyZone from './components/categorypage/singlecategorypages/BabyZone';
import SmartWatch from './components/categorypage/singlecategorypages/SmartWatch';
import MobileAccessories from './components/categorypage/singlecategorypages/MobileAccessories';
import AllAccessories from './components/categorypage/singlecategorypages/AllAccessories';
// All Category Pages


function App() {
  return (
    <>
    <div className="main-app-secttnn">
      
      {/* <Home/> */}

    </div>
    

      <Switch>
        <Route exact path="/" component={PreHomePage}/>
        <Route path="/product" component={SingleProductPage}/>
        <Route path="/my-cart" component={MyCart}/>
        <Route path="/all-categories" component={AllCategories}/>
        <Route path="/signup-registration" component={SignupAndRegistration}/>
        <Route path="/my-account-main" component={MyAccountMainPage}/>
        <Route path="/accounts-settings" component={AccountSettings}/>
        <Route path="/order-confirm-successful" component={OrderConfirmSuccesful}/>
        <Route path="/invoice-page" component={InvoicePage}/>

        {/* All Categories Pages */}
        <Route path="/kitchen-accessories" component={KitchenAccessories}/>
        <Route path="/mens-fashion" component={MensFashion}/>
        <Route path="/womens-fashion" component={WomensFashion}/>
        <Route path="/home-and-living" component={HomeAndLiving}/>
        <Route path="/baby-zone" component={BabyZone}/>
        <Route path="/smart-watches" component={SmartWatch}/>
        <Route path="/mobile-accessories" component={MobileAccessories}/>
        <Route path="/accessories" component={AllAccessories}/>
        {/* All Categories Pages */}

        {/* PreOrder Page Section */}
        <Route path="/pre-order-home-page" component={PreHomePage}/>
        {/* PreOrder Page Section */}

      </Switch>

    </>
  );
}

export default App;
