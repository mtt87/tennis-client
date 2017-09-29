import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import DisplaySets from './components/DisplaySets';
import DisplayGames from './components/DisplayGames';
import DisplayPoints from './components/DisplayPoints';
import Rules from './components/Rules';
import Controls from './components/Controls';
import Winner from './components/Winner';

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <div className="container" style={{ paddingTop: 10 }}>
      <div className="columns">
        <DisplayPoints />
        <DisplaySets />
        <DisplayGames type="Games" />
        <Rules />
      </div>
      <div className="columns">
        <Controls />
        <Winner />
      </div>
    </div>
  </Provider>
);

export default App;
