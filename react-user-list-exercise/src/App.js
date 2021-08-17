import React from 'react';
import {Fragment} from "react"
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { UsersG } from './components/usersGrid/usersG';
import { UsersC } from './components/usersCards/usersC';
import SwitchButton from './components/switchButton/switchButton';

function App() {
  return (
    <div className="App">
    <Fragment>
      <Header />
      <SwitchButton />
      <UsersG />
      <UsersC />
      <Footer />
      </Fragment>
    </div>
  );
}

export default App;