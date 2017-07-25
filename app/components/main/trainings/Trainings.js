import React from 'react';
import {connect} from 'react-redux';
import {showModal} from '../../../actions/index';
import { bindActionCreators } from 'redux';

class Trainings extends React.Component{
    openModalHandler() {
        this.props.showModal(true);
    }
    render() {
        return(
            <section className="container-training">
                <div className="container-training__background">
                    <div>
                        <h2>
                            Наши астрологи проходят обучение в лучших школах, таких как:
                        </h2>
                    </div>
                    <div className="training-list">
                        <div className="training-list__wrap">
                            <p>
                                Московская Академия Астрологии им.Левина
                            </p>
                            <p>
                                Высшая школа классической астрологии
                            </p>
                            <p>
                                Школа астрологии К.Дарагана
                            </p>
                        </div>
                    </div>
                    <div className="training-consultation">
                        <div className="consultation__item">
                            <div className="consultation__name">
                                <span className="pink-name">Жанна Усачева</span> - Консультант астролог
                            </div>
                            <div className="consultation__information-block">
                                <div className="consultation__photo">
                                    <img src="images/cons1.jpg" alt="Жанна Усачёва" title="Жанна Усачёва"/>
                                </div>
                                <div className="consultation__text">
                                    <div className="container__text-description">
                                        Стаж практических занятий астрологией более 6 лет. За это время построила и разобрала более 230 гороскопов, провела около 312 консультаций,онлайн и очно. Имеет десятки отзывов от многочисленных благодарных клиентов, жизнь многих из них после консультации резко поменялась в благоприятном
                                        направлении.
                                    </div>
                                    <ul>
                                        <li>
                                            Составление индивидуального гороскопа
                                        </li>
                                        <li>
                                            Прогнозирование
                                        </li>
                                        <li>
                                            Анализ любовных факторов гороскопа (совместимость)
                                        </li>
                                        <li>
                                            Выбор подходящей даты важных событий (госпитализация, свадьба, поездки и т. п.)
                                        </li>
                                        <li>
                                            Гороскоп бизнеса
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="consultation__item">
                            <div className="consultation__name">
                                <span className="pink-name">Элла Луке Гарзон</span> - Консультант астролог
                            </div>
                            <div className="consultation__information-block">
                                <div className="consultation__photo">
                                    <img src="images/cons2.jpg" alt="Элла Луке Гарзон" title="Элла Луке Гарзон"/>
                                </div>
                                <div className="consultation__text">
                                    <div className="container__text-description">
                                        Дипломированный астролог, выпускница Школы Астрологии К. Дарагана. В астрологии более 5 лет. На протяжении 3 лет, помогает людям разобраться,
                                        с кем можно связать свою судьбу, на какой знак зодиака обратить внимание, когда мы строим свою карьеру, а представитель какого знака зодиака
                                        станет для них лучшим другом до конца жизни.
                                    </div>
                                    <ul>
                                        <li>
                                            Прогнозирование
                                        </li>
                                        <li>
                                            Подробный гороскоп на 1 год во всех сферах (работа, семья, личная жизнь, здоровье, поездки и т. п.)
                                        </li>
                                        <li>
                                            Гороскоп совместимости
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="consultation__item">
                            <div className="consultation__name">
                                <span className="pink-name">Анастасия Гук</span> - Консультант астролог
                            </div>
                            <div className="consultation__information-block">
                                <div className="consultation__photo">
                                    <img src="images/cons3.jpg" alt="Анастасия Гук" title="Анастасия Гук"/>
                                </div>
                                <div className="consultation__text">
                                    <div className="container__text-description">
                                        Занимается астрологией с 2011 года. Закончила Московскую Академию Астрологии им. Левина. Главной ценностью является человек: его чувства, мечты и цели.
                                        Смысл своей работы видит в том, чтобы помочь людям в любой жизненной ситуации, оказать поддержку и наполнить энергией для действия.
                                    </div>
                                    <ul>
                                        <li>
                                            Составление и расшифровка натальной карты
                                        </li>
                                        <li>
                                            Индивидуальная работа
                                        </li>
                                        <li>
                                            Ответ по всем сферам- работа, личная жизнь, дети, здоровье и т. д.
                                        </li>
                                        <li>
                                            Прогнозирование
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="consultation__item">
                            <div className="consultation__name">
                                <span className="pink-name">Елена Тарим</span> - Консультант астролог
                            </div>
                            <div className="consultation__information-block">
                                <div className="consultation__photo">
                                    <img src="images/cons4.jpg" alt="Елена Тарим" title="Елена Тарим"/>
                                </div>
                                <div className="consultation__text">
                                    <div className="container__text-description">
                                        Стаж практических занятий астрологией более 5 лет. Является профессиональным дипломированным астрологом. Имеет диплом Высшей школы
                                        классической астрологии и в своей работе придерживается принципов научной астрологии и концепции «Формул Событий»
                                        (события определяются по специальным формулам).
                                    </div>
                                    <ul>
                                        <li>
                                            Составление и расшифровка натальной карты
                                        </li>
                                        <li>
                                            Индивидуальная работа
                                        </li>
                                        <li>
                                            Ответ по всем сферам- работа, личная жизнь, дети, здоровье и т. д.
                                        </li>
                                        <li>
                                            Прогнозирование
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="training-consultation__btn" onClick={this.openModalHandler.bind(this)}>Получить консультацию профессионального астролога</button>
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
    return bindActionCreators({showModal}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Trainings);