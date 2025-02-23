import { useState, useEffect } from "react";
export default function UserList() {
  const [users, setUsers] = useState(null);
  const [loadingError, setLoadingError] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("");
        const userData = await response.json();
        setUsers(userData);
      } catch (error) {
        setLoadingError(error.message);
      }
    };
    fetchUsers();
  }, []);

  let content;

  if (loadingError) {
    content = <p>Error: {loadingError}</p>;
  } else if (users === null) {
    content = <p>Loading...</p>;
  } else {
    content = (
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
  return content;
}
