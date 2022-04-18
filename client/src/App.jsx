import React, { useEffect, useState } from 'react';
import { HeroesList, HeroForm } from './components'
import { getAllHeroes } from './api/heroesApi';

import { Container } from './App.styled';

const App = () => {
  const [superheroes, setSuperheroes] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchSuperheroes = async () => {
      const res = await getAllHeroes(page);
      setSuperheroes(res);
    }

    console.log('State update');
    fetchSuperheroes();
  }, [page])

  const loadMore = page => setPage(page);

  return (
    <Container>
      <HeroesList items={superheroes} OnLoadMoreClick={loadMore} />
      <HeroForm />
    </Container>
  );
};

export default App;
