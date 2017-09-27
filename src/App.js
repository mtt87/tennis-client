import React from 'react';
import DisplaySetsGames from './components/DisplaySetsGames';
import DisplayPoints from './components/DisplayPoints';
import Rules from './components/Rules';
import Controls from './components/Controls';

const App = () => (
  <div className="container" style={{ paddingTop: 10 }}>
    <div className="columns">
      <DisplayPoints />
      <DisplaySetsGames type="Sets" />
      <DisplaySetsGames type="Games" />
      <Rules />
    </div>
    <div>
      <Controls />
    </div>
  </div>
);

export default App;
