import { useState, useEffect, useRef } from "react";

export default function Form() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  // Use useRef to count renders
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log(`Component re-rendered ${renderCount.current} times`);
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  function submitForm(answer) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== "lima";
        if (shouldError) {
          reject(
            new Error("Good guess but a wrong answer. Please try again. ")
          );
        } else {
          resolve();
        }
      }, 1500);
    });
  }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = firstName + " " + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  if (status === "success") {
    return <h1>That's right</h1>;
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === "submitting"}
        />
        <br />
        <button
          disabled={answer.length === 0 || status === "submitting"}
          title={
            status === "submitting"
              ? "Submitting your answer..." 
              : "Submit your answer"
          }
        >
          {status === "submitting" ? "Submitting..." : "Submit"}
        </button>
        {error !== null && <p className="Error">{error.message}</p>}
      </form>

      <h2>Let’s check you in</h2>
      <label>
        First name: <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name: <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}
