import './App.scss';
import { ThemeProvider } from 'styled-components';
import { theme } from './Styles/theme';
import { GlobalStyle } from './Styles/Global';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Cart from './pages/Cart';
// import Product from './pages/Product';
import ProductList from './pages/ProductList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
          {/* <Home /> */}
          {/* <Login /> */}
          {/* <Cart /> */}
          <ProductList />
          {/* <Product /> */}
      </>
    </ThemeProvider>
  );
}

export default App;
