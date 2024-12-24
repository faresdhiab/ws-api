import React from 'react';
import './App.css';

import UserList from './Components/UserList';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <h1>Workshop API</h1>
      <UserList/>
    </div>
  );
}

export default App;
