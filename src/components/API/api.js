
import axios from 'axios';

const fetchMovies = async (path, query, page) => {
  const response = await axios.get(`https://api.themoviedb.org/3/${path}`, {
    method: 'get',
    params: {
      api_key: 'f1f839cdf74a86a5131b1ff774a00522',
      query: query,
      page: page,
    },
  });

  return response.data;
};
export default fetchMovies