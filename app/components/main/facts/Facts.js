import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import {constant, linear, quadratic, animateValue} from '../../../utils/digit.animate';

class Facts extends React.Component{
    constructor(props) {
        super(props);
        this.flag = 0;
    }
    render() {
        window.addEventListener('scroll', (e) =>{
            if (window.pageYOffset > 3300 && window.pageYOffset < 3550) {
                this.flag += 1;

                if (this.flag === 1) {
                    animateValue('exp', 0, 3000, linear);
                    animateValue('consult', 0, 3000, linear);
                    animateValue('recommendations', 0, 3000, linear);
                    animateValue('card1', 0, 3000, linear);
                    animateValue('card2', 0, 3000, linear);
                }
            }
        });
        return(
            <section className="container-facts">
                <div className="container-facts__background">
                    <div>
                        <h2>
                            Несколько фактов о нас
                        </h2>
                    </div>
                    <div className="facts__wrap">
                        <div className="facts__container">
                            <div className="facts__item">
                                <div>
                                    <span className="facts__text-min">Более</span>
                                    <ScrollableAnchor id={'people-feedback'}>
                                        <span className="facts__text-max" id="exp">7</span>
                                    </ScrollableAnchor>
                                </div>
                                <div className="facts__text">
                                    Лет практического опыта в<br/> астрологии
                                </div>
                            </div>
                            <div className="facts__item">
                                <div>
                                    <span className="facts__text-max facts__item-pink" id="consult">960</span>
                                    <span className="facts__text-min facts__item-pink">+</span>
                                </div>
                                <div className="facts__text facts__item-pink">
                                    Проведено индивидуальных консультаций
                                </div>
                            </div>
                            <div className="facts__item">
                                <div>
                                    <span className="facts__text-max" id="recommendations">73</span>
                                    <span className="facts__text-min">%</span>
                                </div>
                                <div className="facts__text">
                                    Клиентов приходят к нам по<br/> рекомендации
                                </div>
                            </div>
                            <div className="facts__item">
                                <div>
                                    <span className="facts__text-max facts__item-pink"><span id="card1">8</span><span id="card2">500</span></span>
                                    <span className="facts__text-min facts__item-pink">+</span>
                                </div>
                                <div className="facts__text facts__item-pink">
                                    Персональных натальных карт<br/> нами составлено
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Facts;