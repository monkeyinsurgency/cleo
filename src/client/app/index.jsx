import React from 'react';
import { render } from 'react-dom';
import Tabs from './components/Tabs';

import './assets/scss/app.scss';

class App extends React.Component {
  render () {
    return (
      <Tabs>
        <div label="Bills">
          Fetch transactions marked as bills
        </div>
        <div label="Potential Bills">
          Fetch potential bills
        </div>
      </Tabs>
    );
  }
}

render(<App/>, document.getElementById('app'));
