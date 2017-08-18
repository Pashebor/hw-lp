import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {showModal, recomendationsShow, sendClientsCallback} from '../../../actions/index';


class WorkingScheme extends React.Component{

    openModalHandler() {
        this.props.showModal(true);
        this.props.recomendationsShow(true);
        yaCounter45420078.reachGoal('DOWNLOAD_A_SAMPLE2');
    }

    btnSubmitHandler(e) {
        e.preventDefault();
        let formData = {'form-name': 'schema'};
        for (let field in this.refs) {
            formData[field] = this.refs[field].value;
        }
        this.props.sendClientsCallback(formData);
        yaCounter45420078.reachGoal('LEAVE_REQUEST');
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

            <section className="container-scheme">
                <div>
                    <h2>
                        Схема работы с нами
                    </h2>
                </div>
                <p className="scheme-paragraph">
                    <span className="bold">1.</span> Вы оставляете заявку и мы связываемся с Вами для получения необходимых данных, для<br/> составления точного анализа
                </p>
                <div className="scheme">
                    {this.clientsNotification()}
                    <form className="scheme-form" onSubmit={this.btnSubmitHandler.bind(this)}>
                        <div className="scheme__field">
                            <input type="text" ref="phone" name="phone" placeholder="Телефон *" required={true}/>
                        </div>
                        <div className="scheme__field">
                            <input type="submit" value="Оставить заявку" />
                        </div>
                    </form>
                </div>
                <div className="scheme-arrow">
                    <a className="arrow" href="#professionals"></a>
                </div>
                <ScrollableAnchor id={'professionals'}>
                    <ScrollableAnchor id={'work-scheme'}>
                        <p className="scheme-paragraph">
                            <span className="bold">2.</span> Наши профессиональные астрологи составляют персональную натальную карту на основе<br/> полученных от Вас данных
                        </p>
                    </ScrollableAnchor>
                </ScrollableAnchor>
                <p id="title-pictures">
                    Примеры составленных натальных карт:
                </p>
                <div className="scheme-pictures">
                    <div className="scheme-pictures__item">
                        <img src="images/star-circle1.png" alt="Натальная карта первая" title="Натальная карта первая"/>
                    </div>
                    <div className="scheme-pictures__item">
                        <img src="images/star-circle.png" alt="Натальная карта вторая" title="Натальная карта вторая"/>
                    </div>
                </div>

                <div className="scheme-arrow">
                    <a className="arrow" href="#rec"></a>
                </div>
                <ScrollableAnchor id={'rec'}>
                <p className="scheme-paragraph scheme-paragraph__last">
                    <span className="bold">3.</span> Вы получаете подробные рекомендации в интересующих Вас сферах жизни, исходя из<br/>
                    выбранного Вами продукта
                </p>
                </ScrollableAnchor>

                <div className="key-item__btn-wrap">
                    <br/>
                    <button className="key-item__btn" onClick={this.openModalHandler.bind(this)}>
                        <span>Скачать пример рекомендации</span>
                    </button>
                </div>
            
            </section>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        formState: store.hwReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({showModal, recomendationsShow, sendClientsCallback}, dispatch);
};

export default  connect(mapStateToProps, mapDispatchToProps)(WorkingScheme);