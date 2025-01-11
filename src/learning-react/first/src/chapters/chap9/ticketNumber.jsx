import { useState } from "react";

function TicketNumber() {
  const [ticketNumber, setTicketNumber] = useState("");
  const onTicketNumberChanged = (event) => {
    let inputtingTicketNumber = event.target.value;
    const [first = "", second = ""] = inputtingTicketNumber
      .replace(/[^0-9a-z]/gi, "")
      .slice(0, 6)
      .match(/.{0,3}/g) || ["", ""];

    const updatedTicketNumber =
      first.length === 3 && second.length > 0 ? `${first}-${second}` : first;
    setTicketNumber(updatedTicketNumber.toUpperCase());
  };
  const isValid = ticketNumber.length === 7;

  return (
    <section>
      <label htmlFor="ticket-number">Ticket Number:</label>
      <input
        type="text"
        id="ticket-number"
        name="ticket-number"
        onChange={onTicketNumberChanged}
        placeholder={"E.g. J11-K14"}
        value={ticketNumber}
      />
      <span className="ticket-number-result">
        {isValid ? "\u2705" : "\u274C"}
      </span>
    </section>
  );
}

export default function TicketNumberDemo() {
  return <TicketNumber></TicketNumber>;
}
