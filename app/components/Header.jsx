import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import HeaderContent from './HeaderContent';
import ScrollableAnchor from 'react-scrollable-anchor';

class Header extends Component{
    render() {
        return(
            <header>
                {/*<NavBar/>*/}
                <HeaderContent/>
            </header>
        )
    }
}

export default Header;