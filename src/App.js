import './App.scss';
import { ThemeProvider } from 'styled-components';
import { theme } from './Styles/theme';
import { GlobalStyle } from './Styles/Global';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import ErrorPage from './pages/ErrorPage';
import Women from './pages/Women';
import Men from './pages/Men';
import Accesory from './pages/Accesory';
import Kid from './pages/Kid';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/women' element={ <Women /> } />
            <Route path='/men' element={ <Men /> } />
            <Route path='/accesory' element={ <Accesory /> } />
            <Route path='/kids' element={ <Kid /> } />
            <Route path='/cart' element={ <Cart /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='*' element={ <ErrorPage /> } />
          </Routes>
        </>
      </>
    </ThemeProvider>
  );
}

export default App;
