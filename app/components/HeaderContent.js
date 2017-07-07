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
            <section className="container-personal-card">
                <div className="container-personal-card__opacity">
                    <h1>
                        Персональная натальная карта <span id="pink-time">за 24 часа</span>
                    </h1>
                    <h2>
                        Позволяет сделать детальный анализ своей жизни по 11 показателям
                    </h2>
                    <p>
                        Получите рекомендации, которые помогут добиться максимально возможного роста во всех сферах жизни!
                    </p>
                    <form className="personal-card">
                        <div className="personal-card__item">
                            <input className="personal-card__input" type="text" placeholder="Имя *"/>
                        </div>
                        <div className="personal-card__item">
                            <input className="personal-card__input" type="text" placeholder="Телефон *"/>
                        </div>
                        <div className="personal-card__item">
                            <input className="personal-card__input personal-card__btn-submit" type="submit" value="Получить рекомендации!"/>
                        </div>
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
    return bindActionCreators({sendClientsCallback}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContent);
