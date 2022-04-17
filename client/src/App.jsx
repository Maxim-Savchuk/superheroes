import React, { useEffect, useState } from 'react';
import { HeroesList } from './components'
import { getAllHeroes } from './api/heroesApi';

const App = () => {
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    getAllHeroes().then(res => setSuperheroes(res));
  }, [])

  return (
    <div>
      <HeroesList items={superheroes} />
    </div>
  );
};

export default App;
