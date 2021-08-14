import React from 'react';
import {Fragment} from "react"
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { UsersG } from './components/usersGrid/usersG/usersG';
import { UsersC } from './components/usersCards/usersC/usersC';
import SwitchButton from './components/switchButton/switchButton';
import { UsersCards } from './components/usersCards/usersCards';

import { UsersGrid } from './components/usersGrid/usersGrid';

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