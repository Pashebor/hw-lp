import React from 'react';
import {showModal, recomendationsShow} from '../../../actions/index';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';

class SuccessKey extends React.Component{
    openModalHandler() {
        this.props.showModal(true);
        this.props.recomendationsShow(true);
        return true;
    }

    render() {
    return (

        <section className="container-key">
            <div className="container-key__opacity">
                <div>
                    <h2>
                        Вы получите ключ к успеху в таких сферах как:
                    </h2>
                </div>
                <div className="wrap__key-item">
                    <div className="key-item">
                        <div className="key-item__container">
                            <img src="images/med-bag.svg"/>
                                <p>Здоровье</p>
                        </div>
                        <ul>
                            <li>
                                Какие болезни могут мне угрожать
                            </li>
                            <li>
                                Чего стоит опасаться, чтобы не навредить здоровью
                            </li>
                            <li>
                                Насколько сильна зависимость от алкоголя
                            </li>
                            <li>
                                Агрессия - насколько Вы можете себя контролировать
                            </li>
                        </ul>
                    </div>
                    <div className="key-item">
                        <div className="key-item__container">
                            <img src="images/heart.svg"/>
                                <p>
                                    Любовь / отношения
                                </p>
                        </div>
                        <ul>
                            <li>
                                К каким отношениям предрасположены
                            </li>
                            <li>
                                Каким должен быть идеальный партнёр
                            </li>
                            <li>
                                Будут ли дети и как будут устроены отношения с ними
                            </li>
                            <li>
                                Возможны ли конфликты с ближайшими родственниками
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="wrap__key-item">
                    <div className="key-item">
                        <div className="key-item__container">
                            <img src="images/job.svg"/>
                                <p>Карьера</p>
                        </div>
                        <ul>
                            <li>
                                Что мешает в построении карьеры
                            </li>
                            <li>
                                Волевые качества - можете ли Вы стать руководителем
                            </li>
                            <li>
                                Каковы ваши таланты и способности
                            </li>
                            <li>
                                Есть ли опасности для текущей ситуации
                            </li>
                        </ul>
                    </div>
                    <div className="key-item">
                        <div className="key-item__container">
                            <img src="images/finance.svg"/>
                                <p>
                                    Финансы
                                </p>
                        </div>
                        <ul>
                            <li>
                                Узнаете в какой сфере деятельности ждёт финансовый успех
                            </li>
                            <li>
                                Когда наччинать тот или иной вид бизнеса
                            </li>
                            <li>
                                Чего Вам не хватает для создания финансовой стабильности
                            </li>
                            <li>
                                В какие сферы инвестировать финансы для их увеличения
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="key-item__btn-wrap">
                    <button className="key-item__btn" onClick={this.openModalHandler.bind(this)}>
                        <span>Скачать пример рекомендации</span>
                    </button>
                </div>
            </div>
        </section>  
    );
    }
};

const mapStateToProps = (store) => {
    return {
        formState: store.hwReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({showModal, recomendationsShow}, dispatch);
};

export default  connect(mapStateToProps, mapDispatchToProps)(SuccessKey);
