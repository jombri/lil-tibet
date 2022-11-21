import './App.scss';
import { ThemeProvider } from 'styled-components';
import { theme } from './Styles/theme';
import { GlobalStyle } from './Styles/Global';
import Announcement from './components/Announcement';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
          <Announcement />
      </>
    </ThemeProvider>
  );
}

export default App;
