import axios from "axios";

axios.defaults.baseURL = 'https://www.themoviedb.org/3/';
const API_KEY = '4707371d53aa0467b337f4fda109b465';

export const fetchTrending = async () => {
  const response = await axios.get('trending/movie/day?', {
    params: {
      api_key: API_KEY,
      page: 1,
    }
  })
  console.log(response.data)
  return response.data
}
export const fetchSearchMovie = async (query, page) => {
  const response = await axios.get('search/movie?', {
    params: {
      api_key: API_KEY,
      query: `${query}`,
      page: `${page}`,
    }
  })
  console.log(response.data)
  return response.data
}

export const fetchMovieDetails = async (movie_id) => {
  const response = await axios.get(`search/movie/${movie_id}?`, {
    params: {
      api_key: API_KEY,
    }
  })
  console.log(response.data)
  return response.data
}

export const fetchMovieCast = async (movie_id) => {
  const response = await axios.get(`movie/${movie_id}/credits?`, {
    params: {
      api_key: API_KEY,
    }
  })
  console.log(response.data)
  return response.data
}

export const fetchMovieReviews = async (movie_id) => {
  const response = await axios.get(`movie/${movie_id}/reviews?`, {
    params: {
      api_key: API_KEY,
    }
  })
  console.log(response.data)
  return response.data
}