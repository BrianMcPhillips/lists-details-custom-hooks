import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CharacterListPage from '../../pages/CharacterListPage';
import Detail from '../Detail/Detail';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CharacterListPage} />
        <Route exact path="/characters/:name" component={Detail} />
      </Switch>
    </Router>
  );
}

