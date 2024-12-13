import fbckStyles from "./Feedback.module.css";

const Feedback = ({ review, positiveFeedback }) => {
  return (
    <ul className={fbckStyles["feedback-list"]}>
      <li className={fbckStyles["feedback-item"]}>Good: {review["good"]}</li>
      <li className={fbckStyles["feedback-item"]}>
        Neutral: {review["neutral"]}
      </li>
      <li className={fbckStyles["feedback-item"]}>Bad: {review["bad"]}</li>
      <li className={fbckStyles["feedback-item"]}>
        Positive: {positiveFeedback}%
      </li>
    </ul>
  );
};

export default Feedback;
