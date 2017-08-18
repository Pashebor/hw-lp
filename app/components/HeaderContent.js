import React, { Component } from 'react';
import {connect} from 'react-redux';
import {sendClientsCallback, showModal} from '../actions/index';
import { bindActionCreators } from 'redux';
import ScrollableAnchor from 'react-scrollable-anchor';

class HeaderContent extends Component{
    openModalHandler() {
        this.props.showModal(true);
        yaCounter45420078.reachGoal('REQUEST_A_CALL');
    }
    btnSubmitHandler(e) {
        e.preventDefault();
        let formData = {'form-name': 'header'};
        formData.name = this.refs.name.value;
        formData.phone = this.refs.phone.value;

        this.props.sendClientsCallback(formData);
        yaCounter45420078.reachGoal('GET_RECOMMENDATIONS');
    }

    clientsNotification() {
        let response = this.props.formState.clientsResp;
        let notification = (resp) => {
            switch (resp.response) {
                case true:
                    return <h5 className="form__notification">Ваша заявка принята, с Вами свяжется наш астролог</h5>;
                    break;
                case false:
                    return <h5 className="form__notification know-form__notification--error">Произошла ошибка отправки письма</h5>;
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
        return(
            <section className="container-personal-card">
                <div className="container-personal-card__opacity">
                    <div className="header">
                        <div className="header__wrap">
                            <div className="header__logo">
                                <div className="header__logo-image">
                                    <img src="images/logo.png" alt="Логотип Repeople" title="Логотип Repeople"/>
                                </div>
                                <div className="header__logo-text">
                                    Repeople
                                </div>
                            </div>
                            <div className="header__contacts">
                                <div className="header__contacts-number">
                                    <a href="tel: 84952369997">+7 (495) 236 99 97</a>
                                </div>
                                <div className="header__contacts-btn">
                                    <input type="button" value="Заказать звонок" onClick={this.openModalHandler.bind(this)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1>
                        Персональная натальная карта <span id="pink-time">за 24 часа</span>
                    </h1>
                    <h2>
                        Позволяет сделать детальный анализ своей жизни по 11 показателям
                    </h2>
                    <p>
                        Получите рекомендации, которые помогут добиться максимально возможного роста во всех сферах жизни!
                    </p>
                    {this.clientsNotification()}
                    <form className="personal-card" onSubmit={this.btnSubmitHandler.bind(this)}>
                        <div className="personal-card__item">
                            <input className="personal-card__input" type="text" name="name" ref="name" placeholder="Имя *" required={true}/>
                        </div>
                        <div className="personal-card__item">
                            <input className="personal-card__input" type="text" ref="phone" name="phone" placeholder="Телефон *" required={true}/>
                        </div>
                        <ScrollableAnchor id={'needs-analysis'}>
                        <div className="personal-card__item">
                            <input className="personal-card__input personal-card__btn-submit" type="submit" value="Получить рекомендации!" />
                        </div>
                        </ScrollableAnchor>
                    </form>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        formState: store.hwReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({sendClientsCallback, showModal}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContent);
