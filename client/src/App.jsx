import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router';
import { HomePage, HeroPage } from './pages';

import { Container } from './App.styled';

const App = () => {
  return (
    <Container>

      <Suspense fallback={null}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/:superheroId">
            <HeroPage />
          </Route>
        </Switch>
      </Suspense>

    </Container>
  )
};

export default App;
