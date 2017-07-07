import React, { Component } from 'react';
import {openCase, sendClientsCallback} from '../actions/index';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import MaskedInput from 'react-maskedinput';
import Slider from 'react-slick';
import ScrollableAnchor from 'react-scrollable-anchor';

class Result extends Component{
    caseClickHandler(event){
        let array = [];

        for (let image in this.refs) {
            if (this.refs.hasOwnProperty(image)) {
                let source = this.refs[image].src;
                array.push(source);
            }
        }

        for (let i = 0; i < array.length; i+=1) {
            if (array[i] === event.target.src) {
                let index = array.indexOf(array[i]);
                array.splice(index, 1);
                array.unshift(event.target.src);
                break;
            }
        }

        this.props.openCase(array, true);
    }

    btnSubmitHandler(e) {
        e.preventDefault();
        let formData = {'form-name': 'results'};
        formData.phone = this.refs.phone.mask.getValue();
        this.props.sendClientsCallback(formData);
        /*yaCounter44418460.reachGoal('KNOW');*/
        return true;
    }

    clientsNotification() {
        let response = this.props.formState.clientsResp;
        let notification = (resp) => {
            switch (resp.response) {
                case true:
                    return <h5 className="know-form__notification">Ваша заявка принята, с Вами свяжется наш менеджер</h5>;
                    break;
                case false:
                    return <h5 className="know-form__notification know-form__notification--error">Произошла ошибка отправки письма</h5>;
                    break;
            }
        };

        if (response) {
            return notification(response);
        } else {
            return false;
        }
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            lazyLoad: false,
            draggable: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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

        <section className="results">
                <div className="container">
                    <h2 className="results__title">РЕЗУЛЬТАТЫ НАШЕЙ РАБОТЫ:</h2>
                    <p className="results__subtitle">МЫ ЗНАЕМ, КАК СДЕЛАТЬ ИЗ МАЛОГО БИЗНЕСА КРУПНЫЙ</p>
                    <ScrollableAnchor id={'results'}>
                    <Slider {...settings}>
                    <div>
                    <div className="results-info__row">
                        <div className="results-info__column">
                            <div className="results-info__column__item"><img ref="image1" src="images/gd.jpg" alt="График роста сайта Генеральный дирекктор" title="График роста сайта Генеральный дирекктор" onClick={this.caseClickHandler.bind(this)}/></div>
                            <div className="results-info__column__item"><img ref="image2" src="images/icc.jpg" alt="График роста сайта Междунаротной торговой палаты" title="График роста сайта Междунаротной торговой палаты" onClick={this.caseClickHandler.bind(this)}/></div>
                        </div>
                    </div>
                    </div>
                    <div>
                      <div className="results-info__row">
                        <div className="results-info__column">
                            <div className="results-info__column__item"><img ref="image3" src="images/pansionat.jpg" alt="График роста сайта Пансионат Осень" title="График роста сайта Пансионат Осень" onClick={this.caseClickHandler.bind(this)}/></div>
                            <div className="results-info__column__item"><img ref="image4" src="images/dejure.jpg" alt="График роста сайта De Jure De Facto" title="График роста сайта De Jure De Facto" onClick={this.caseClickHandler.bind(this)}/></div>
                        </div>
                      </div>
                    </div>
                        <div>
                            <div className="results-info__row">
                                <div className="results-info__column">
                                    <div className="results-info__column__item"><img ref="image5" src="images/santech.jpg" alt="График роста сайта Пансионат Осень" title="График роста сайта Пансионат Осень" onClick={this.caseClickHandler.bind(this)}/></div>
                                    <div className="results-info__column__item"><img ref="image6" src="images/bussines-resuourse.jpg" alt="График роста сайта De Jure De Facto" title="График роста сайта De Jure De Facto" onClick={this.caseClickHandler.bind(this)}/></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="results-info__row">
                                <div className="results-info__column">
                                    <div className="results-info__column__item"><img ref="image7" src="images/word-deal.jpg" alt="График роста сайта Пансионат Осень" title="График роста сайта Пансионат Осень" onClick={this.caseClickHandler.bind(this)}/></div>
                                    <div className="results-info__column__item"><img ref="image8" src="images/veronica.jpg" alt="График роста сайта De Jure De Facto" title="График роста сайта De Jure De Facto" onClick={this.caseClickHandler.bind(this)}/></div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </ScrollableAnchor>
                    <h5 className="know-form__title">Узнайте, сколько новых клиентов Вы можете получить с сайта!</h5>
                    {this.clientsNotification()}
                    <form className="form-group know-form" onSubmit={this.btnSubmitHandler.bind(this)}>
                        <MaskedInput mask="+7(111) 111 11 11" type="text" ref="phone" className="form-control" placeholder="Телефон *"  required/>
                        <input type="submit" className="btn submit-btn"  value="Узнать сколько получу клиентов"/>
                    </form>
                    <div className="separatorbottom">
                        <svg version="1.1" id="bottom-triangle" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M 0 100 H 100 V 0 H 58.5 L 50 100 L 41.5 0 H 0 Z"></path></svg>
                    </div>
                </div>
        </section>
    );
    }
};

const mapStateToProps = (store) => {
    return {
        formState: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({openCase, sendClientsCallback}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);