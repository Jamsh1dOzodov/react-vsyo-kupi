import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Personal from './pages/Personal';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/personal' element={<Personal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
