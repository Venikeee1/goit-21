import config from '../settings/config';

const { API_URL } = config;

export const fetchUserById = (id) => {
  return fetch(`${API_URL}/players/${id}`).then(res => res.json());
}

export const fetchUsersListByHeroName = (heroId) => {
  return fetch(`${API_URL}/rankings?hero_id=${heroId}`).then(res => res.json());
}