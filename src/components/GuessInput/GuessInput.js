import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [guess, setGuess] = React.useState("");

  function handleChange(event) {
    setGuess(event.target.value.toUpperCase());
  }

  function handleSubmit(event) {
    event.preventDefault();

    handleSubmitGuess(guess);

    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guess}
        onChange={handleChange}
      />
    </form>
  );
}

export default GuessInput;
