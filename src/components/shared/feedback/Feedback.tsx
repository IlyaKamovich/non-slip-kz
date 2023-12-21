import './feedback.scss';

const Feedback = () => {
  return (
    <div className="feedback-wrapper">
      <div className="options__rating">
        <b className="options__rating-numb">4.9</b>
        <div className="options__rating-star"></div>
        <a href="#revs" className="options__rating-size">
          2648 оценок, 93 отзыва
        </a>
      </div>
    </div>
  );
};

export default Feedback;
