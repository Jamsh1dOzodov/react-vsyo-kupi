import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Personal from './pages/Personal';
import PersonalData from './pages/PersonalData';
import PersonalAddress from './pages/PersonalAddress';
import PasswordChange from './pages/PasswordChange';
import Password from './pages/Password';
import Favorite from './pages/Favorite';
import History from './pages/History';
import Email from './pages/Email';
import { useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from './context/context';


function App() {

  const [isAuth, setIsAuth] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('isAuth') === 'true') {
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/personal' element={<Personal />} />
          <Route path='/personaldata' element={<PersonalData />} />
          <Route path='/personaladdress' element={<PersonalAddress />} />
          <Route path='/passwordchange' element={<PasswordChange />} />
          <Route path='/password' element={<Password />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/history' element={<History />} />
          <Route path='/email' element={<Email />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
