// src/components/NavBar/NavBar.jsx
import { useContext } from 'react';
import { Link } from 'react-router';
import { UserContext } from '../../context/UserContext';

const NavBar = () => {
  const { user } = useContext(UserContext);
  
  const handleSignOut = () => {
    // Clear the token from localStorage
    localStorage.removeItem('token');
    // Clear the user state
    setUser(null);
  };

  return (
    <nav>
      {user ? (
        <ul>
          <li>Welcome, {user.username}</li>
          {/* Call the handleSignOut function on a click */}
          <li><Link to='/'>Dashboard</Link></li>
          <li><Link to='/' onClick={handleSignOut}>Sign Out</Link></li>
        </ul>
      ) : (
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/sign-in'>Sign In</Link></li>
          <li><Link to='/sign-up'>Sign Up</Link></li>
        </ul>
      )}
    </nav>
  );
};


export default NavBar;
