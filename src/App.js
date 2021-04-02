import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Admin from './Components/Admin/Admin';

import Product from './Components/Product/Product';
import Checkout from './Components/Checkout/Checkout';
import Oder from './Components/Oder/Oder';
import Login from './Components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';

export const userContext = createContext();

function App() {

  const [loginUser, setLoginUser] = useState({});
  return (
    <div className="App">
    <userContext.Provider value={[loginUser, setLoginUser]} >

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Product></Product>
          </Route>
          <Route path="/home">
            <Product></Product>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivetRoute path="/admin">
            <Admin></Admin>
          </PrivetRoute>
          <PrivetRoute path="/orders">
            <Oder></Oder>
          </PrivetRoute>
          <PrivetRoute path="/name/:name">
            <Checkout></Checkout>
          </PrivetRoute>
        </Switch>
      </Router>
    </userContext.Provider>
    </div>
  );
}

export default App;
