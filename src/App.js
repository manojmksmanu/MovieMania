import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Movies from './pages/Movies/Movies';
import TvSeries from './pages/TvSeries/TvSeries';
import Home from './pages/Home/Home';
import Navigation from './components/Navigation/Navigation'
import Search from './pages/Search/Search';
import SingleShow from './pages/SingleShow/SingleShowMovie.js/SingleShow';

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Navigation />
        <div className='app' >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="search" element={<Search/>} />
            <Route path="tvseries" element={<TvSeries/>} />
            <Route path=":id" element={<SingleShow/>} />
            {/* <Route path="tv/:id" element={<SingleShowTv/>} /> */}
          </Routes>
        </div>
      </BrowserRouter>


    </>
  );
}

export default App;
