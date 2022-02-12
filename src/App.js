import { useState } from 'react';
import './App.css';

function App() {
  const [LoggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
        {LoggedIn == true
           ? (<div>
             <button  onClick={() => setLoggedIn(false)}>Log Off</button>
             I am logged in
             </div>)
           : (
             <>
             <button onClick={() => setLoggedIn(true)}>Login</button>
             <div>I am NOT logged in!</div>
             </>
           )
          }
    </div>
  );
}


export default App;
