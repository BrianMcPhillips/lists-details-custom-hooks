import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CharacterListPage from '../../pages/CharacterListPage';
import DetailPage from '../../pages/DetailPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CharacterListPage} />
        <Route exact path="/detail/name" component={DetailPage} />
      </Switch>
    </Router>
  );
}

