import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import "./App.css";
// import Home from './pages/Home/Home'
// import Movies from './pages/Movies/Movies';
// import TvSeries from './pages/TvSeries/TvSeries';
import Navigation from "./components/Navigation/Navigation";
import SingleShowTv from "./pages/SingleShow/SIngleShowTv/SingleShowTv";
import Loader from "./components/Loading/Loading";
import Footer from "./components/Footer/Footer";
// import Search from './pages/Search/Search';
// import SingleShow from './pages/SingleShow/SingleShowMovie.js/SingleShow';
const Home = React.lazy(() => import("./pages/Home/Home"));
const Movies = React.lazy(() => import("./pages/Movies/Movies"));
const TvSeries = React.lazy(() => import("./pages/TvSeries/TvSeries"));
const Search = React.lazy(() => import("./pages/Search/Search"));
const SingleShow = React.lazy(() =>
  import("./pages/SingleShow/SingleShowMovie.js/SingleShow")
);
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Navigation />
        <div className="app">
          <Suspense
            fallback={
              <div className="LoadingContainer">
                <Loader setLoader={"true"} />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="movies" element={<Movies />} />
              <Route path="search" element={<Search />} />
              <Route path="tvseries" element={<TvSeries />} />
              <Route path="tv/:id" element={<SingleShowTv />} />
              <Route path="movies/:id" element={<SingleShow />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
