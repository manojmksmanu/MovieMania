import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Movies from './pages/Movies/Movies';
import TvSeries from './pages/TvSeries/TvSeries';
import Home from './pages/Home/Home';
import MoviesDetails from './pages/MoviesDetails/MoviesDetails'
function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        {/* <Navigation /> */}
        <div className='app' >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="tvseries" element={<TvSeries/>} />
          </Routes>
        </div>
      </BrowserRouter>


    </>
  );
}

export default App;
