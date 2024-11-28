
const API_KEY = 'ae12ea5a7b1b64c8228d59117fd15a59';
const API_Domain = 'https://api.themoviedb.org/3';
export const Image_Domain = 'https://image.tmdb.org/t/p/w500';

export const getPopularMovie = async (page=1) => {
  try{
    const response = await fetch(`${API_Domain}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
    const data = await response.json();
    return data;
  }catch(err){
    console.error(err);
    return false;
  }
};

export const getUpcomingMovie = async (page=1) => {
  try{
    const response = await fetch(`${API_Domain}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`);
    const data = await response.json();
    return data;
  }catch(err){
    console.error(err);
    return false;
  }
};

export const getMovieDetails = async (id) => {
  try{
    const response = await fetch(`${API_Domain}/movie/${id}?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  }catch(err){
    console.error(err);
    return false;
  }
}

export const getSimilarMovies = async (id) => {
  try{
    const response = await fetch(`${API_Domain}/movie/${id}/similar?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  }catch(err){
    console.error(err);
    return false;
  }
}

export const getTopRatedMovies = async (page=1) => {
  try{
    const response = await fetch(`${API_Domain}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`);
    const data = await response.json();
    return data;
  }catch(err){
    console.error(err);
    return false;
  }
}

export const getMovieReviews = async (id) => {
  try{
    const response = await fetch(`${API_Domain}/movie/${id}/reviews?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  }catch(err){
    console.error(err);
    return false;
  }
}

