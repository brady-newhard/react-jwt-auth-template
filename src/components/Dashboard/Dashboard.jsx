// src/components/Dashboard/Dashboard.jsx

import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import * as userService from '../../services/userService';

const Dashboard = () => {
  const { user } = useContext(UserContext);
//   const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await userService.index();
        console.log('Fetched users:', fetchedUsers);
        // setUsers(fetchedUsers);
      } catch (err) {
        console.log(err);
      }
    };

    if (user) {
      fetchUsers();
    }
  }, [user]);

  return (
    <main>
      <h1>Welcome, {user.username}</h1>
      <p>
        This is the dashboard page where you can see a list of all the users.
      </p>
    </main>
  );
};


export default Dashboard;

