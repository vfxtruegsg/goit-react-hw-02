import optStyles from "./Options.module.css";

const Options = ({ reviewFunction, resetFunction, availabilityReviews }) => {
  return (
    <div className={optStyles["options-container"]}>
      <button
        onClick={() => reviewFunction("good")}
        className={optStyles["option-btn"]}
      >
        Good
      </button>
      <button
        onClick={() => reviewFunction("neutral")}
        className={optStyles["option-btn"]}
      >
        Neutral
      </button>
      <button
        onClick={() => reviewFunction("bad")}
        className={optStyles["option-btn"]}
      >
        Bad
      </button>
      <button
        onClick={resetFunction}
        className={
          availabilityReviews
            ? optStyles["option-btn-reset"]
            : optStyles["hidden"]
        }
      >
        Reset
      </button>
    </div>
  );
};

export default Options;
