import React, { useEffect, useState } from 'react';
import { HeroesList, HeroForm } from './components'
import { getAllHeroes } from './api/heroesApi';

import { Container } from './App.styled';

const App = () => {
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    getAllHeroes().then(res => setSuperheroes(res));
  })

  return (
    <Container>
      <HeroesList items={superheroes} />
      <HeroForm />
    </Container>
  );
};

export default App;
