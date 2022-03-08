import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './singleproductmenu.css';
import homem from '../../assets/homem.svg'
import shareiconnew from '../../assets/shareiconnew.svg'
import dropmenu from '../../assets/dropmenu.svg'

import classnames from "classnames";

import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';


class SingleProductTopMenu extends Component {

    // Top Bar Option
    constructor(props) {
        super(props);
    
        this.state = {
          prevScrollpos: window.pageYOffset,
          visible: true
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
                className={classnames("single-product-menu-dot-cm-top-menu", {
                "single-product-menu-dot-cm-top-menu-hidden": !this.state.visible
                })}
            >
               
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <Link to="/">
                                <div className="single-product-menu-dot-cm-top-menu-left-icon">
                                    <span><i className="fa fa-chevron-left"></i></span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-10 text-right">
                            <div className="right-dot-cm-single-mmnsenu">
                                <ul>
                                    <li>
                                        <Link to="/">
                                            <div className="single-product-menu-dot-cm-top-menu-right-icon">
                                                <img src={homem} alt="orponbd preorder"/>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <div className="single-product-menu-dot-cm-top-menu-right-icon">
                                                <img src={shareiconnew} alt="orponbd preorder share"/>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <div className="single-product-menu-dot-cm-top-menu-right-icon-dropdown">
                                            <img src={dropmenu} alt="orponbd global collection"/>
                                            <DropdownButton id="dropdown-basic-button" title="">
                                                <Dropdown.Item><Link to="/my-account-main"><span><i class="far fa-user"></i></span> Account</Link></Dropdown.Item>
                                                <Dropdown.Item><Link to="/wishlist"><span><i class="far fa-heart"></i></span> Wishlist</Link></Dropdown.Item>
                                            </DropdownButton>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            </>
        );
    }
}
export default SingleProductTopMenu;
