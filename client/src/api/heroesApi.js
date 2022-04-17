import axios from 'axios';

const BASE_URL = 'https://superheroes-proj.herokuapp.com/api/superheroes';

const getAllHeroes = async () => {
  const { data } = await axios.get(BASE_URL);
  return data.data.result;
};

export { getAllHeroes };
