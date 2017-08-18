import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {showModal, productCostShow} from '../../../actions/index';
import ScrollableAnchor from 'react-scrollable-anchor';

class ProductCost extends React.Component{
    orderFormHandler(event) {
        this.props.showModal(true);
        this.props.productCostShow(true, event.target.getAttribute('data-product'));
        switch (event.target.getAttribute('data-product')){
            case 'Натальная карта':
                yaCounter45420078.reachGoal('1_RATE');
                break;
            case 'Натальная карта (расширенная)':
                yaCounter45420078.reachGoal('2_RATE');
                break;
            case 'Совместимость (синастрия)':
                yaCounter45420078.reachGoal('3_RATE');
                break;
        }
    }
    render() {
        return(
            <section className="container-cost">
                <div className="container-cost__opacity">
                    <div>
                        <h2>
                            Стоимость наших продуктов:
                        </h2>
                    </div>
                    <div className="cost">
                        <div className="cost__item">
                            <div className="cost__item-wrap">
                                <div className="cost__title">
                                    Натальная карта
                                    <br/>
                                </div>
                                <div className="cost__text">
                                    Личный гороскоп, который описывает<br/>потенциал, важные сферы и ключевые<br/>события жизни
                                </div>
                                <div className="cost__line-block">
                                    <div className="cost__line"></div>
                                </div>
                                <div className="cost__list">
                                    <ScrollableAnchor id={'facts'}>
                                    <ul>
                                        <li>Описание ключевых особенностей<br/>вашего характера</li>
                                        <li>Описание способностей и<br/>врожденных талантов</li>
                                        <li>Сильные и слабые качества</li>
                                    </ul>
                                    </ScrollableAnchor>
                                </div>
                                <div className="cost__now-all">
                                    4 900 РУБ.
                                </div>
                                <div className="cost__btn">
                                    <input type="submit" value="Заказать натальную карту" data-product="Натальная карта" onClick={this.orderFormHandler.bind(this)}/>
                                </div>
                            </div>
                        </div>
                        <div className="cost__item">
                            <div className="cost__item-wrap-pink">
                                <div className="cost__title">
                                    Натальная карта<br/>
                                    (расширенная)
                                </div>
                                <div className="cost__text">
                                    Более подробное, детальное изучение<br/> человека, используя время и место<br/> рождения
                                </div>
                                <div className="cost__line-block">
                                    <div className="cost__line-pink"></div>
                                </div>
                                <div className="cost__list">
                                    <ul>
                                        <li>Ректификация - определение времени рождения, если оно не известно</li>
                                        <li>Описание ключевых особенностей <br/>вашего характера</li>
                                        <li>Описание способностей и <br/>врожденных талантов</li>
                                        <li>Сильные и слабые качества</li>
                                        <li>Механизмы работы со слабыми<br/> качествами</li>
                                        <li>Профпригодность. Определение не<br/>
                                            только талантов человека, но и ту<br/>
                                            область деятельности, в которой он
                                            будет трудиться реально</li>
                                        <li>Определение источника дохода</li>
                                        <li>Карьера. В какой области человек<br/> будет наиболее успешен</li>
                                        <li>Личная жизнь, сексуальные<br/> потребности</li>
                                        <li>Основные событийные риски</li>
                                        <li>Главные задачи и цели воплощения</li>
                                    </ul>
                                </div>
                                <div className="cost__now">
                                    14 900
                                </div>
                                <div className="cost__trait">
                                    9 000 <span id="money">РУБ.</span>
                                </div>
                                <div className="cost__btn-pink">
                                    <input type="submit" value="Заказать натальную карту" data-product="Натальная карта (расширенная)" onClick={this.orderFormHandler.bind(this)}/>
                                </div>
                            </div>
                        </div>
                        <div className="cost__item">
                            <div className="cost__item-wrap">
                                <div className="cost__title">
                                    Совместимость<br/>
                                    (синастрия)
                                </div>
                                <div className="cost__text">
                                    Насколько перспективными являются<br/>отношения с партнером, либо наоборот<br/>разрушительными друг для друга
                                </div>
                                <div className="cost__line-block">
                                    <div className="cost__line"></div>
                                </div>
                                <div className="cost__list">
                                    <ul>
                                        <li>Подробный натальный анализ<br/>каждого из партнеров</li>
                                        <li>Потребности каждого партнера.<br/>Какой идеал?</li>
                                        <li>Проблемы в паре. Рекомендации для их решения</li>
                                        <li>Каким образом партнер оказывает<br/>влияние на различные сферы Вашей жизни</li>
                                        <li>Мотивы, скрепляющие пару и<br/>разъединяющие ее. Чего опасаться?</li>
                                        <li>Периоды глубоких кризисов<br/>
                                            Рекомендации для их решения</li>
                                        <li>Измены</li>
                                        <li>Одиночество и безбрачие</li>
                                        <li>Равнодушие</li>
                                        <li>Рекомендации, каким образом<br/>привлечь партнера, обратить на себя внимание, заставить о себе думать</li>
                                    </ul>
                                </div>
                                <div className="cost__now-all">
                                    19 900 РУБ.
                                </div>
                                <ScrollableAnchor id={'product-cost'}>
                                <div className="cost__btn">
                                    <input type="submit" value="Проверить совместимость" data-product="Совместимость (синастрия)" onClick={this.orderFormHandler.bind(this)}/>
                                </div>
                                </ScrollableAnchor>
                            </div>
                        </div>
                    </div>
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
    return bindActionCreators({showModal, productCostShow}, dispatch);
};

export default  connect(mapStateToProps, mapDispatchToProps)(ProductCost);