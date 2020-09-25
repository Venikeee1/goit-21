import config from '../settings/config';

const { API_URL } = config;

export const fetchUserById = (id) => {
  return fetch(`${API_URL}/players/${id}`).then(res => res.json());
}