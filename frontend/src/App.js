import React  from 'react'
import './App.css';
import { BrowserRouter as Router , Switch ,Route} from 'react-router-dom'

import {Provider} from 'react-redux'
import store from './redux/store'

import Header from './components/header/Header';
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import Footer from './components/footer/Footer'
import Product from './pages/Product'
import Alert from './components/alerts/Alert'
import ShoppingCart from './pages/ShoppingCart'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  return (
    <Provider store = {store}>
      <Router>
        <Header />
        <div className = 'page-container'>
          <Alert />
          <Switch>
            <Route exact path = '/' ><Landing/> </Route>
            <Route path ='/auth' ><Auth /></Route>
            <Route path ='/product' ><Product/></Route>
            <Route path ='/cart' ><ShoppingCart/></Route>
            <Route path ='/contact' ><Contact/></Route>
            <Route path ='/about' ><About/></Route>
          </Switch>
        </div>
        <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
