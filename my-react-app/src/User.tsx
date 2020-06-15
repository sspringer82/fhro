import React, { useEffect, useState } from 'react';
import axios from 'axios';

const User: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const { data: usersFromServer } = await axios.get(
        'http://localhost:3001/users',
      );
      setUsers(usersFromServer);
    }
    getUsers();
  }, []);

  return (
    <div>
      {users.map((user: { firstname: string; lastname: string }) => {
        return (
          <div>
            {user.firstname} {user.lastname}
          </div>
        );
      })}
    </div>
  );
};

export default User;
