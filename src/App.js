import React, { useEffect } from 'react';
import { Switch,Route, Redirect } from 'react-router-dom';
import LoginPage from './features/auth/pages/LoginPage';
import { NotFound, PrivateRouter } from './component/Common';
import Admin from './component/layout/Admin';

function App() {
  
  return (<>
   
   

      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>

        <PrivateRouter path="/admin">
          <Admin></Admin>
        </PrivateRouter>
        

        <Route path="/">
          <Redirect to="/admin" />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
  </>
  );
}

export default App;
