import './App.scss';
import { ThemeProvider } from 'styled-components';
import { theme } from './Styles/theme';
import { GlobalStyle } from './Styles/Global';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
          <Home />
      </>
    </ThemeProvider>
  );
}

export default App;
