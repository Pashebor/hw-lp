import React, { Component } from 'react';
import {connect} from 'react-redux';
import {sendClientsCallback} from '../actions/index';
import { bindActionCreators } from 'redux';
import MaskedInput from 'react-maskedinput';

class HeaderContent extends Component{

    btnSubmitHandler(e) {
        e.preventDefault();
        let formData = {'form-name': 'header'};
        for (let field in this.refs) {
            formData[field] = this.refs[field].mask.getValue();
        }
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
        return(
            <section className="header-content-background">
                <div className="content--background">
                    <div className="container header__content">
                        <h2 className="header__content-title">КОМПЛЕКСНОЕ ПРОДВИЖЕНИЕ САЙТА В <span>ТОП-3</span> ЯНДЕКСА И GOOGLE</h2>
                        <h3 className="header__content-subtitle">Гарантированно приведем на Ваш сайт тысячи новых клиентов</h3>
                        <p className="header__content-text">Финансовая гарантия результата. Рост продаж. Продвижение только по целевым запросам.</p>
                        <p className="header__content-text">Снижение стоимости привлечения клиента. Расчет окупаемости.</p>
                        <h5 className="know-form__title">Узнайте, сколько новых клиентов Вы можете получить с сайта!</h5>
                        {this.clientsNotification()}
                        <form className="form-group know-form" onSubmit={this.btnSubmitHandler.bind(this)}>
                            <MaskedInput mask="+7(111) 111 11 11" type="text" ref="phone" className="form-control" placeholder="Телефон *"  required/>
                            <input type="submit" className="btn submit-btn"  value="Узнать сколько получу клиентов"/>
                        </form>
                    </div>
                </div>
                <div className="separatorbottom">
                    <svg version="1.1" id="bottom-triangle" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M 0 100 H 100 V 0 H 58.5 L 50 100 L 41.5 0 H 0 Z"></path></svg>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        formState: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({sendClientsCallback}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContent);
