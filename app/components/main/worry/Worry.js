import React, {Component} from 'react';

class Worry extends Component{
    render() {
        return (
            <section className="container-worry">
                <div>
                    <h2>
                        Воспользуйтесь картой,если вас тревожит хотя бы один из этих пунктов:
                    </h2>
                </div>
                <div className="wrap-worry">
                    <div className="one-item">
                        <img src="images/palpitation.svg"/>
                            <p>
                                Есть проблемы со здоровьем
                            </p>
                    </div>
                    <div className="one-item">
                        <img src="images/relations.svg"/>
                            <p>
                                Не складываются отношения<br/> (муж, жена, любовник, любовница)
                            </p>
                    </div>
                    <div className="one-item">
                        <img src="images/luck.svg"/>
                            <p>
                                Отвернулась удача, сплошное тотальное невезение
                            </p>
                    </div>
                    <div className="one-item">
                        <img src="images/think.svg"/>
                            <p>
                                Есть ощущение, что вы занимаетесь<br/> чем-то не тем
                            </p>
                    </div>
                    <div className="one-item">
                        <img src="images/children.svg"/>
                            <p>
                                Когда у меня будут дети
                            </p>
                    </div>
                    <div className="one-item">
                        <img src="images/money.svg"/>
                            <p>
                                Испытываете финансовые затруднения
                            </p>
                    </div>
                </div>

            </section>
        )
    }
}

export default Worry;