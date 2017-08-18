import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showModal, sendCallback, nullCallbacks,  productCostShow, recomendationsShow} from '../actions/index';
import { bindActionCreators } from 'redux';
import MaskedInput from 'react-maskedinput';

class ModalForm extends Component{
    personalAgreement() {
        return (
            <div className="personal-data">
                <input type="checkbox" className="form-control" required defaultChecked={true}/><p>Согласен на обработку <a href="https://sales-generator.ru/Politika-konfidencialnosti.pdf">персональных данных</a></p>
            </div>
        );
    }

    isShow() {
        if (this.props.formState.modalShow) {
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

    mailNotification() {
        let response = this.props.formState.responseJson;
        let notification = (resp) => {
            switch (resp.response) {
                case true:
                    return <h5 className="popup-form__notification">Ваша заявка принята, с Вами свяжется наш менеджер</h5>;
                    break;
                case false:
                    return <h5 className="popup-form__notification popup-form__notification--error">Произошла ошибка отправки письма</h5>;
                    break;
            }
        };

        if (response) {
         return notification(response);
        } else {
            return false;
        }
    }

    btnSubmitHandler(e) {
        e.preventDefault();
        let formData = {'form-name': 'callback'};

        if (this.props.formState.recomendations) {
            formData['form-name'] = 'recomendations-example';
            formData.email = this.refs.email.value;
            formData.phone = this.refs.phone.value;
            /*this.props.sendCallback(formData);*/
            console.log(formData);
        } else if (this.props.formState.productCost) {
            formData['form-name'] = 'product-order';
            formData.product = this.props.formState.product;
            formData.email = this.refs.email.value;
            formData.phone = this.refs.phone.value;
            /*this.props.sendCallback(formData);*/
            console.log(formData);
        } else {
            for (let field in this.refs) {
                formData[field] = this.refs[field].value;
            }
            console.log(formData);
            /*this.props.sendCallback(formData);*/
        }
    }

    closeModalHandler(e) {
        e.stopPropagation();

        if (this.props.formState.productCost) {
            this.refs.email.value = '';
            this.refs.phone.value = '';
        } else if(this.props.formState.recomendations) {
            this.refs.email.value = '';
            this.refs.phone.value = '';
        } else {
            for (let fieldClear in this.refs) {
                this.refs[fieldClear].value = '';
            }
        }
        this.props.showModal(false);
        this.props.nullCallbacks(null, null);
        this.props.productCostShow(false);
        this.props.recomendationsShow(false);
    }

    formClickHandler(e){
        e.stopPropagation();
        this.props.showModal(true);
    }
    formVariants() {
        if (this.props.formState.productCost) {
            return(
                <div className="popup-form">
                    <div className="popup-form__close" onClick={this.closeModalHandler.bind(this)}>&times;</div>
                    <p>Оформление заявки</p>
                    {this.mailNotification()}
                    <form className="form-group" onClick={this.formClickHandler.bind(this)} onSubmit={this.btnSubmitHandler.bind(this)}>
                        <label>Ваш Email <span>*</span></label>
                        <input type="text" ref="email" name="email" className="form-control" required="true" placeholder="example@mail.ru"/>
                        <label>Телефон <span>*</span></label>
                        <input placeholder="Телефон *" type="text" ref="phone" name="phone" required="true" className="form-control"/>
                        {this.personalAgreement()}
                        <input type="submit" value='Отправить заявку' className="key-item__btn"/>
                    </form>
                </div>
            )
        } else if (this.props.formState.recomendations) {
            return(
                <div className="popup-form">
                    <div className="popup-form__close" onClick={this.closeModalHandler.bind(this)}>&times;</div>
                    <p>Оставьте Ваши контакты и мы отправим пример рекомендаций Вам на почту</p>
                    {this.mailNotification()}
                    <form className="form-group" onClick={this.formClickHandler.bind(this)} onSubmit={this.btnSubmitHandler.bind(this)}>
                        <label>Ваш Email <span>*</span></label>
                        <input type="text" ref="email" name="email" className="form-control" required="true" placeholder="example@mail.ru"/>
                        <label>Телефон <span>*</span></label>
                        <input placeholder="Телефон *" type="text" ref="phone" name="phone" required="true" className="form-control"/>
                        {this.personalAgreement()}
                        <input type="submit" value='Отправить заявку' className="key-item__btn"/>
                    </form>
                </div>
            )
        } else {
            return(
                <div className="popup-form">
                    <div className="popup-form__close" onClick={this.closeModalHandler.bind(this)}>&times;</div>
                    <p>Заказ обратного звонка</p>
                    <br/>
                    {this.mailNotification()}
                    <form className="form-group" onClick={this.formClickHandler.bind(this)} onSubmit={this.btnSubmitHandler.bind(this)}>
                        <label>Во сколько Вам позвонить?</label>
                        <input  placeholder="__:__"  type="text" ref="callback" name="callback" className="form-control" required={true}/>
                        <label>Телефон <span>*</span></label>
                        <input placeholder="Телефон *" type="text" ref="phone" name="phone" required={true} className="form-control"/>
                        {this.personalAgreement()}
                        <input type="submit" value='Отправить заявку' className="key-item__btn"/>
                    </form>
                </div>
            )
        }
    }
    render() {
        return(
            <div className="popup-overlay" style={this.isShow()} onClick={this.closeModalHandler.bind(this)}>
                {this.formVariants()}
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        formState: store.hwReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({showModal, sendCallback, nullCallbacks, productCostShow, recomendationsShow}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm);
