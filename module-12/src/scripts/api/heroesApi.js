import config from '../settings/config';

const { API_URL } = config;

export const fetchHeroes = () => {
  return fetch(`${API_URL}/heroes`).then(res => res.json());
};
