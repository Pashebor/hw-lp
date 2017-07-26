import React, { Component } from 'react';
import HeaderContent from './HeaderContent';
import ScrollableAnchor from 'react-scrollable-anchor';

class Header extends Component{
    render() {
        return(
          <ScrollableAnchor id={'personal-natal-card'}>
            <header>
                <HeaderContent/>
            </header>
          </ScrollableAnchor>
        )
    }
}

export default Header;