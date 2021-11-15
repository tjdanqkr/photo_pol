import axios from 'axios';

axios.defaults.baseURL = 'https://www.tjdanqkr.kro.kr/';

const coronaApi = async (start = 1000) => {
  const res = await axios.get(`/corona/${start}/`);
  return res;
};
export default coronaApi;
