import axios from 'axios';

axios.defaults.baseURL = `${import.meta.env.VITE_BASE_URL}`;

export const fetchAllSpells = async () => {
  const res = await axios.get('/api/spells');

  if (res.status !== 200) {
    throw new Error('Unable to fetch all spells');
  }
  const data = await res.data;

  return data;
};

export const fetchSingleSpell = async (url: string) => {
  const res = await axios.get(`${url}`);

  if (res.status !== 200) {
    throw new Error('Unable to fetch single spell');
  }
  const data = await res.data;
  return data;
};
