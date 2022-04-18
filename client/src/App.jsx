import React, { useEffect, useState } from 'react';
import { HeroesList, HeroForm } from './components'
import { getAllHeroes } from './api/heroesApi';

import { Container } from './App.styled';

const App = () => {
  const [activePage, setActivePage] = useState(0);
  const [totalPages, setTotalPages] = useState(0)
  const [superheroes, setSuperheroes] = useState([]);

  const pages = new Array(totalPages).fill(null).map((v, i) => i);

  useEffect(() => {
    const fetchSuperheroes = async () => {
      const { pageNumber, heroData } = await getAllHeroes(activePage);
      setTotalPages(pageNumber)
      setSuperheroes(heroData);
    }
    fetchSuperheroes();
  }, [activePage])

  const setNumberOfPage = page => {
    setActivePage(page);
  }

  return (
    <Container>
      <HeroesList items={superheroes} pageCount={pages} onPageClick={setNumberOfPage} />
      <HeroForm />
    </Container>
  );
};

export default App;
