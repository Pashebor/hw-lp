import React, { Component } from 'react';
import {openSlider} from '../actions/index';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import Slider from 'react-slick';

class SliderPopup extends Component {
    isOpen() {
        if (this.props.formState.slider) {
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

    closeSliderHandler(e) {
        e.stopPropagation();
        this.props.openSlider('',false);
    }

    sliderClickHandler(e){
        e.stopPropagation();
        this.props.openSlider(true);
    }

    showSlider() {
        if(this.props.formState.caseUri && this.props.formState.slider) {
            const settings = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                dragging: false,
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
                <Slider {...settings} >
                    <div><img src={this.props.formState.caseUri[0]}/></div>
                    <div><img src={this.props.formState.caseUri[1]}/></div>
                    <div><img src={this.props.formState.caseUri[2]}/></div>
                    <div><img src={this.props.formState.caseUri[3]}/></div>
                </Slider>
            )
        }
    }

    render() {

        return(
            <section className="popup-slider-overlay" style={this.isOpen()} >
                <div className="popup-slider">
                    <div className="popup-slider__close" onClick={this.closeSliderHandler.bind(this)}>&times;</div>
                    {this.showSlider()}
                </div>
            </section>
        )
    }
};

const mapStateToProps = (store) => {
    return {
        formState: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({openSlider}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SliderPopup);