import React, { createContext, useState } from 'react'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import TopMenu from './components/TopMenu/TopMenu';
import './CSSutils/styles.scss'
import './reset.scss'
import MainRouter from './Router/Router';

export const SessionContext = createContext()

function App() {

  const [superUser, setSuperUser] = useState(false);

  function loginSuperUser() {
    setSuperUser(true)
    console.log('Superuser logged');
  }



  return (
    <SessionContext.Provider value={{ superUser, loginSuperUser }}>
      <TopMenu />
      <Router>
        <MainRouter />
      </Router>
    </SessionContext.Provider>
  );
}

export default App;
