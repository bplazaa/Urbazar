import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginComponent from './Components/LoginComponent';
import Register from './Components/register';
import CarritoComponent from './Components/CarritoComponent';
import ProductComponent from './Components/ProductDeatilComponent';


ReactDOM.render(
  <React.StrictMode>
    <Router>

      <Route path="/" exact component={LoginComponent}/>
      <Route path="/registro" exact component={Register}/>
      <Route path="/carrito" exact component={CarritoComponent}/>
      <Route path="/productdetail" exact component={ProductComponent}/>
      
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

