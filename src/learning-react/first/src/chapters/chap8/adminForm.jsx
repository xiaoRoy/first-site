import { useState } from "react";
import "./styles/admin-form.css";

function AdminForm() {
  const [isAdmin, setAdmin] = useState(false);
  const [password, setPassword] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    if (password === "1234") {
      setAdmin(true);
    }
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div className="container">
      {isAdmin ? (
        <h1>Bacon is delicious!</h1>
      ) : (
        <form action="">
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={onPasswordChange}
            />
          </div>

          <button onClick={onSubmit}>Login</button>
        </form>
      )}
    </div>
  );
}

export default function AdminFormDemo() {
  return <AdminForm></AdminForm>;
}
