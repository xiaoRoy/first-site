import { useState } from "react";
import "./styles/feedback-form.css";

const STATUS = {
  TYPING: "typing",
  SENDING: "sending",
  SENT: "sent",
};

const formStatus = {
  typing: STATUS.TYPING,
  sending: STATUS.SENDING,
  sent: STATUS.SENT,

  isSending: function (currentStatus) {
    return currentStatus === this.sending;
  },

  isSent: function (currentStatus) {
    return currentStatus === this.sent;
  },
};

function FeedbackForm() {
  const [feedback, setFeedback] = useState("");
  const [status, setStatus] = useState(STATUS.TYPING);

  const onFeedbackInputting = (event) => {
    setFeedback(event.target.value);
  };
  const onFeedbackSubmitted = async (event) => {
    event.preventDefault();
    setStatus(formStatus.sending);
    try {
      await sendMessage("Hello");
      setStatus(formStatus.sent);
    } catch (error) {
      throw new Error("Sending Feedback Error");
    }
  };
  const isSending = formStatus.isSending(status);
  const btnStatus = isSending ? "Sending" : "Send";
  return (
    <>
      {formStatus.isSent(status) ? (
        <h1>Thanks for feedback!</h1>
      ) : (
        <form onSubmit={onFeedbackSubmitted}>
          <h2>How was your stay at The Prancing Pony?</h2>
          <ul>
            <li>
              <textarea
                name="feedback"
                id=""
                value={feedback}
                onChange={onFeedbackInputting}
              ></textarea>
            </li>
            <li>
              <input type="submit" value={btnStatus} disabled={isSending} />
            </li>
          </ul>
        </form>
      )}
    </>
  );
}

function sendMessage(text) {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

export default function FeedbackFormDemo() {
  return <FeedbackForm></FeedbackForm>;
}
