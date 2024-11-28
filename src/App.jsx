import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css'
import PopularMovies from './components/PopularMovies/PopularMovies';
import Details from './components/Details/Details';
import Explore from './components/Explore/Explore';
import Upcoming from './components/Upcoming/Upcoming';
import TopRated from './components/TopRated/TopRated';

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes> {/* All children of Routes must be Route or React.Fragment */}
          <Route index element={<PopularMovies/>} />
          <Route path='/PopularMovies' element={<PopularMovies/>} />
          <Route path='/Movie/:movieId' element={<Details/>} />
          <Route path='/Explore' element={<Explore/>} />
          <Route path='/Upcoming' element={<Upcoming/>} />
          <Route path='/TopRated' element={<TopRated/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
