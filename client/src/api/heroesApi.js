import axios from 'axios';

axios.defaults.baseURL = 'https://superheroes-proj.herokuapp.com/api';

const getAllHeroes = async (page) => {
  try {
    const { data } = await axios.get(`/superheroes/?page=${page}`);
    const heroData = data.data.result;
    const pageNumber = data.data.totalPages;
    return { pageNumber, heroData };
  } catch (error) {
    console.log(error.message);
  }
};

const createHero = async (hero) => {
  try {
    await axios.post('/superheroes', hero);
  } catch (error) {
    console.log(error.message);
  }
};

const removeHero = async (heroId) => {
  try {
    await axios.delete(`/superheroes/${heroId}`);
  } catch (error) {
    console.log(error.message);
  }
};

export { getAllHeroes, createHero, removeHero };
