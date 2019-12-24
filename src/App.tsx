import React from 'react';

import Header from 'containers/header.container';
import Home from 'screens/home.screen';
import DemoAAAA from 'screens/demoAAAA.screen';

import { Route } from 'react-router';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Route path='/demo' render={() => <DemoAAAA />} />
      <Route path='/' component={Home} />
    </>
  );
};


export default App;
