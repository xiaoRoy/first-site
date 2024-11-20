import "./styles/status-form.css";

const formStatus = {
  empty: "empty",
  success: "success",
  submitting: "submitting",
  error: "error",

  isEmpty: function (status) {
    return this.empty === status;
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

function BaseStatusForm({ status }) {
  const isAnswerDisabled = formStatus.isSubmitting(status);
  const isSubmitDisabled =
    formStatus.isEmpty(status) || formStatus.isSubmitting(status);
  const isErrorMessageVisible = formStatus.isError(status);
  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form action="" className="state-form">
        <textarea
          name="quiz-answer"
          id=""
          disabled={isAnswerDisabled}
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

function StatusForm({ status = formStatus.empty }) {
  console.log(`Status Form:${status}`);
  let form;
  switch (status) {
    case formStatus.success:
      form = <SuccessStatusForm></SuccessStatusForm>;
      break;

    default:
      form = <BaseStatusForm status={status}></BaseStatusForm>;
      break;
  }
  return form;
}

export default function StatusFormDemo() {
  const statusList = Object.keys(formStatus).filter(
    (key) => typeof formStatus[key] !== "function"
  );
  return statusList.map((status) => (
    <>
      <section>
        <h4>
          form status <em>{status}</em>
        </h4>
        <StatusForm status={status}></StatusForm>
      </section>
    </>
  ));
}
