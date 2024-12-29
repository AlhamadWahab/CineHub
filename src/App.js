import './App.css';
import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router';
import Home from './components/home/Home';
import SearchResult from './pages/searchResult/SearchResult';


function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:term" element={<SearchResult />} />
      </Routes>
    </>
  );
}

export default App;
