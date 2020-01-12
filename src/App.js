import React from 'react';
import { GlobalStyle, theme} from 'composable-dashboard';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import PetTable from './components/PetTable/PetTable';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <PetTable />
            </Route>
              
            <Route path="/student">
              <Dashboard/>
            </Route>
          </Switch>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
