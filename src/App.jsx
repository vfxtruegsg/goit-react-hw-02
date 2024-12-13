import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import Feedback from "./components/Feedback/Feedback";
import { useState, useEffect } from "react";

function App() {
  const [review, setReview] = useState(() => {
    const dataReviews = JSON.parse(localStorage.getItem("reviews"));

    if (dataReviews) {
      return dataReviews;
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(review));
  }, [review]);

  const updateFeedback = (feedbackType) => {
    setReview((prev) => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };

  const resetReviews = () => {
    setReview({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = review.good + review.neutral + review.bad;
  const positiveFeedback = Math.round((review.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        reviewFunction={updateFeedback}
        resetFunction={resetReviews}
        availabilityReviews={totalFeedback}
      />
      {!totalFeedback ? (
        <Notification />
      ) : (
        <Feedback review={review} positiveFeedback={positiveFeedback} />
      )}
    </>
  );
}

export default App;
