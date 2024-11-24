import { useState } from "react";
import "./styles/status-form.css";

const formStatus = {
  empty: "empty",
  typing: "typing",
  success: "success",
  submitting: "submitting",
  error: "error",

  isEmpty: function (status) {
    return this.empty === status;
  },

  isTyping: function (status) {
    return this.typing === status;
  },

  isSuccessful: function (status) {
    return this.success === status;
  },

  isSubmitting: function (status) {
    return this.submitting === status;
  },

  isError: function (status) {
    return this.error === status;
  },
};

function SuccessStatusForm() {
  return <h1>That's right!</h1>;
}

class WrongAnswer extends Error {
  constructor(message) {
    super(message);
  }
}

async function submitForm(answer) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const isWrongAnswer = "lima" !== answer;
  if (isWrongAnswer) {
    throw new WrongAnswer("Good guess but a wrong answer. Try again!");
  }
}

function BaseStatusForm({ status, setCurrentStatus }) {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const isAnswerDisabled = formStatus.isSubmitting(status);
  const isSubmitDisabled =
    formStatus.isEmpty(status) || formStatus.isSubmitting(status) || answer.length === 0;
  const isErrorMessageVisible = formStatus.isError(status) || error != null;

  const onAnswerInputting = (event) => setAnswer(event.target.value);

  const onSubmitted = async (event) => {
    event.preventDefault();
    setCurrentStatus(formStatus.submitting);
    try {
      await submitForm(answer);
      setCurrentStatus(formStatus.success);
    } catch (error) {
      if (error instanceof WrongAnswer) {
        setCurrentStatus(formStatus.typing);
        setError(error);
      } else {
        throw error;
      }
    }
  };
  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form action="" className="state-form" onSubmit={onSubmitted}>
        <textarea
          name="quiz-answer"
          id=""
          disabled={isAnswerDisabled}
          onChange={onAnswerInputting}
          value={answer}
        ></textarea>
        <button disabled={isSubmitDisabled} className="button-submit">
          submit
        </button>
      </form>
      {isErrorMessageVisible && (
        <p className="error"> Good guess but a wrong answer. Try again!</p>
      )}
    </>
  );
}

function StatusForm({ status = formStatus.typing }) {
  const [currentStatus, setCurrentStatus] = useState(status);
  let form;
  switch (currentStatus) {
    case formStatus.success:
      form = <SuccessStatusForm></SuccessStatusForm>;
      break;

    default:
      form = (
        <BaseStatusForm
          status={currentStatus}
          setCurrentStatus={setCurrentStatus}
        ></BaseStatusForm>
      );
      break;
  }
  return form;
}

export default function StatusFormDemo() {
  const statusList = Object.keys(formStatus).filter(
    (key) => typeof formStatus[key] !== "function"
  );
  return statusList.map((status) => (
    <section key={status}>
      <h4>
        form status <em>{status}:</em>
      </h4>
      <StatusForm status={status}></StatusForm>
    </section>
  ));
}
