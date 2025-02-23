import { useState } from "react";

export default function LoginForm({ onSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onUsernameChanged = (event) => setUsername(event.target.value);
  const onPasswordChanged = (event) => setPassword(event.target.value);
  const internOnSubmit = (event) => {
    event.preventDefault();
    onSubmit({ username, password });
  };
  return (
    <form onSubmit={internOnSubmit}>
      <label>
        Login:{" "}
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={onUsernameChanged}
        ></input>
      </label>

      <label>
        Password:{" "}
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onPasswordChanged}
        ></input>
      </label>
      <button>Login</button>
    </form>
  );
}
