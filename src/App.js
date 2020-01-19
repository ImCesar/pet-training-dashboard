import React from 'react';
import { GlobalStyle, theme} from 'composable-dashboard';
import { ThemeProvider } from 'styled-components'
import Routes from './routes/Routes';
import CustomerState from './hooks/useCustomers/CustomersState';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <CustomerState>
        <Routes />
      </CustomerState>
    </ThemeProvider>
  );
}

export default App;
