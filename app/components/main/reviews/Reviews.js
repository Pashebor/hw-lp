import React from 'react';

const Reviews = () => {
    return(
        <section className="container-reviews">
            <div className="container-reviews__background">
                <h2>
                    ОТЗЫВЫ ЛЮДЕЙ, ПОЛУЧИВШИХ НАШИ РЕКОМЕНДАЦИИ:
                </h2>
            </div>
            <div className="reviews-images__wrap">
                <div className="reviews-images">
                    <img src="images/review1.jpg" alt="Отзыв Юлии" title="Отзыв Юлии"/>
                </div>
                <div className="reviews-images">
                    <img src="images/review2.jpg" alt="Отзыв Алены" title="Отзыв Алены"/>
                </div>
                <div className="reviews-images">
                    <img src="images/review3.jpg" alt="Отзыв девушки" title="Отзыв девушки"/>
                </div>
            </div>
        </section>
    );
};

export default Reviews