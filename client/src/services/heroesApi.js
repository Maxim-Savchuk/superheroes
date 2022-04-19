import axios from 'axios';

axios.defaults.baseURL = 'https://superheroes-proj.herokuapp.com/api';

const getAllHeroes = async (page) => {
  try {
    const { data } = await axios.get(`/superheroes/?page=${page}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const getHero = async (heroId) => {
  try {
    const { data } = await axios.get(`/superheroes/${heroId}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const createHero = async (hero) => {
  try {
    const { data } = await axios.post('/superheroes', hero);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const removeHero = async (heroId) => {
  try {
    await axios.delete(`/superheroes/${heroId}`);
    return heroId;
  } catch (error) {
    console.log(error.message);
  }
};

export { getAllHeroes, createHero, removeHero, getHero };
