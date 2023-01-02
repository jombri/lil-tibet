import './App.scss';
import { ThemeProvider } from 'styled-components';
import { theme } from './Styles/theme';
import { GlobalStyle } from './Styles/Global';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
// import Product from './pages/Product';
// import ProductList from './pages/ProductList';
import ErrorPage from './pages/ErrorPage';
// import Navbar from './components/Navbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {/* <Navbar /> */}
        <>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/cart' element={ <Cart /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='*' element={ <ErrorPage /> } />
          </Routes>
        </>
          {/* <Home /> */}
          {/* <Login /> */}
          {/* <Cart /> */}
          {/* <ProductList /> */}
          {/* <Product /> */}
      </>
    </ThemeProvider>
  );
}

export default App;
