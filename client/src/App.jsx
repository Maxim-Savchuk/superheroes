import React from 'react';
import { Switch, Route } from 'react-router';
import { HomePage, HeroPage } from './pages';

import { Container } from './App.styled';

const App = () => {
  return (
    <Container>

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/superheroes/:superheroId">
          <HeroPage />
        </Route>
      </Switch>

    </Container>
  )
};

export default App;
