import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{ }, dispatch] = useStateValue(); // Extract 'dispatch' from useStateValue

  useEffect(() => {
    // Will only run once when the app component loads...
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // The user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]); // Make sure to include 'dispatch' in dependency array

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/" element={<><Header /><Home /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
