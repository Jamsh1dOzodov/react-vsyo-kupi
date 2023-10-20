import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Personal from './pages/Personal';
import PersonalData from './pages/PersonalData';
import PersonalAddress from './pages/PersonalAddress';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/personal' element={<Personal />} />
        <Route path='/personaldata' element={<PersonalData />} />
        <Route path='/personaladdress' element={<PersonalAddress />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
