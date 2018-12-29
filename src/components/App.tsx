import Button from '@material-ui/core/Button';
import * as React from 'react';

import logo from '../assets/logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
          <Button variant='contained' color='primary'>
            Hello World!
          </Button>
        </p>
      </div>
    );
  }
}

export default App;
