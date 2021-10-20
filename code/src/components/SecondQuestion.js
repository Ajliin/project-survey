import React from "react";

const SecondQuestion = ({
  interestInput,
  onInterestInputChange,
  onStepChange,
}) => {
  return (
    <form id="secondQuestion" className="form">
      <h2 className="page-header">second question</h2>
      <label className="label" htmlFor="interstInput">
        <p>What is your interest?</p>
      </label>
      <select
        className="input"
        id="interestInput"
        type="text"
        value={interestInput}
        onChange={onInterestInputChange}
      >
        <option value="">Select what you are interested in</option>
        <option value="buyer">Buyer</option>
        <option value="seller">Seller</option>
        <option value="buyer-and-seller">Buyer and seller</option>
      </select>
      <button type="submit" className="link-button" onClick={onStepChange}>
        Next question
      </button>
    </form>
  );
};

export default SecondQuestion;
