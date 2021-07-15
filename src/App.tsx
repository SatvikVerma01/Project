import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AppContainerPage from './pages/AppContainer.page';
import AuthPage from './pages/Auth.page';
import NotFoundPage from './pages/NotFound.page';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login"></Redirect>
          </Route>
          <Route path={["/login","/signup"]} exact>
            <AuthPage/>
          </Route>
          <Route path={["/dashboard","/recordings","/lecture/:lectureNumber"]} exact>
            <AppContainerPage/>
          </Route>
          <Route>
            <NotFoundPage/>
          </Route>
        </Switch> 
      </BrowserRouter>
    </div>

  );
}

export default App;
