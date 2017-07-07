import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {showModal} from '../actions/index';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';


class NavBar extends Component{
    openModalHandler() {
        this.props.showModal(true);
        yaCounter44418460.reachGoal('CALL_BACK');
        return true;
    }

    render() {
        return(
          <nav className="container nav">
              <div className="nav__logo"><a href="http://sales-generator.ru"><img src="images/saleslogowhite.svg"  alt="Sales Generator logo"/></a></div>
              <h2 className="nav__title">Агентство Интернет-маркетинга</h2>
              <div className="nav__tel">
                  <a  href="tel:88003331293">8 (800) 333 12 93</a>
                  <a  href="tel:84951250840">8 (495) 125 08 40</a>
              </div>
              <button className="btn btn--callback" onClick={this.openModalHandler.bind(this)}>Обратный звонок</button>
          </nav>
        );
    };
}

const mapStateToProps = (store) => {
    return {
        formState: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({showModal}, dispatch);
};

export default  connect(mapStateToProps, mapDispatchToProps)(NavBar);