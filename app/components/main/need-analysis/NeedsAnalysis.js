import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

const NeedsAnalysis = () => {
    return(
        <section className="container-analysis">
            <div>
                <h2>
                    Кому необходим данный анализ
                </h2>
            </div>
            <div className="wrap">
                <div className="analysis-wrap">
                    <div className="analysis-item">
                        <img src="images/schedule.svg"/>
                            <p>
                                Думаете о своем развитии и<br/> не хотите плыть по течению
                            </p>
                    </div>
                    <div className="analysis-item">
                        <img src="images/libra.svg"/>
                            <p>
                                Запутались и не можете сбалансировать свою жизнь
                            </p>
                    </div>
                    <div className="analysis-item">
                        <img src="images/love.svg"/>
                            <p>
                                Хотите разобраться в<br/> отношениях с партнером
                            </p>
                    </div>
                    <div className="analysis-item">
                        <img src="images/lamp.svg"/>
                        <ScrollableAnchor id={'key-to-success'}>
                            <p>
                                Хотите узнать свои сильные и слабые качества
                            </p>
                        </ScrollableAnchor>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default NeedsAnalysis;