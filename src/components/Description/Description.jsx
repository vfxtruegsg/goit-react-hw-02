import descrStyles from "./Description.module.css";

const Description = () => {
  return (
    <>
      <h1 className={descrStyles["page-title"]}>Sip Happens Café</h1>
      <p className={descrStyles["page-description"]}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
};

export default Description;
