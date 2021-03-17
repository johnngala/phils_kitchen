import React  from 'react'
import './App.css';
import { BrowserRouter as Router , Switch ,Route} from 'react-router-dom'

import {Provider} from 'react-redux'
import store from './redux/store'

import NotFound from './pages/NotFound'
import Header from './components/header/Header';
import Landing from './pages/Landing';
import Footer from './components/footer/Footer'
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
            <Route exact path = '/' ><Landing/></Route>
            <Route path ='/cart' ><ShoppingCart/></Route>
            <Route path ='/contact' ><Contact/></Route>
            <Route path ='/about' ><About/></Route>
            <Route> <NotFound/></Route>
          </Switch>
        </div>
        <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
