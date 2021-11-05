import axios from 'axios';

axios.defaults.baseURL = 'https://openapi.seoul.go.kr:8088';

const coronaApi = async (start = 1) => {
  const res = await axios.get(
    `/616d69714a716b7235305568567957/json/Corona19Status/${start}/${
      start + 99
    }/`,
  );
  return res;
};
export default coronaApi;
