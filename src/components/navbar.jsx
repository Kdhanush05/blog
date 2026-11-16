import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useEffect } from 'react';
function Navbar() {
  const [user, setUser] = React.useState(false);

  useEffect(() => {
      auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('User is signed in:', user);
        setUser(true);
      }
      else {
        console.log('No user is signed in.');
        setUser(false);

      }
    });


  }, []);

  const logout = () => {
    signOut(auth);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">My App</div>
          <div className="flex space-x-4">
            <a href="/dashboard" className="text-white hover:text-gray-300">Home</a>
           
            <a href="/blogs" className="text-white hover:text-gray-300">blogs</a>
            {user ?<button onClick={logout} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">Logout</button> :<a href="/login"> <button  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">Login</button></a> }


          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;