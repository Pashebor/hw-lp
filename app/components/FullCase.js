import React, { Component } from 'react';
import {connect} from 'react-redux';
import {openCase} from '../actions/index';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick';


class FullCase extends Component{
    isShow(){
        if(this.props.formState.fullCase) {
            return {
                display: 'block',
                animation: 'popupAnimOpen 0.4s 1 linear'
            };
        } else {
            return {
                animation: 'popupAnimClose 0.4s 1 linear',
                display: 'none'
            };
        }
    }
    

    isUri() {
        if (this.props.formState.caseUri && this.props.formState.fullCase) {
            const settings = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        infinite: true
                    }
                }, {

                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        dots: false,
                        arrows: false
                    }
                }]
            };

            return(
                <Slider {...settings}>
                     <div><img src={this.props.formState.caseUri[0]}/></div>
                     <div><img src={this.props.formState.caseUri[1]}/></div>
                     <div><img src={this.props.formState.caseUri[2]}/></div>
                     <div><img src={this.props.formState.caseUri[3]}/></div>
                     <div><img src={this.props.formState.caseUri[4]}/></div>
                     <div><img src={this.props.formState.caseUri[5]}/></div>
                     <div><img src={this.props.formState.caseUri[6]}/></div>
                     <div><img src={this.props.formState.caseUri[7]}/></div>
                </Slider>
            )
        }
    }

    closeFullcaseHandler(){
        this.props.openCase('', false);
    }
    render() {
        return(
            <section className="popup-overlay" style={this.isShow()}>
                <div className="popup-fullcase">
                    <div className="popup-fullcase__close" onClick={this.closeFullcaseHandler.bind(this)}>&times;</div>
                    {this.isUri()}
                </div>
            </section>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        formState: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({openCase}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FullCase);