import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '4707371d53aa0467b337f4fda109b465';


export const fetchTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}&page=${1}`)
  return response.data
}
export const fetchSearchMovie = async (query) => {
  const response = await axios.get('search/movie?', {
    params: {
      api_key: API_KEY,
      query: `${query}`,
    }
  })
  return response.data
}

export const fetchMovieDetails = async (movie_id) => {
  const response = await axios.get(`movie/${movie_id}?api_key=${API_KEY}`)
  return response.data
}

export const fetchMovieCast = async (movie_id) => {
  const response = await axios.get(`movie/${movie_id}/credits?api_key=${API_KEY}`)
  return response.data
}

export async function fetchMovieReviews(movie_id) {
  try {
    const response = await axios.get(`movie/${movie_id}/reviews?api_key=${API_KEY}`)
    return response.data
  } catch (error) {
    new Error('Page not found')
  }
}