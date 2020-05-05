import React from 'react';
import './App.css';
import Home from './container/Home';
import Header from './components/Header';
import Hero from './components/hero';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import ContactUs from './container/ContactUs';
import Post from './container/post';


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <Router>
    <div className="App">      
      <Header />
      <Hero />
      <Route path="/" exact component={Home} />
      <Route path="/contact" component={ContactUs} />
      <Route path="/post/:postId" component={Post} />
    </div>
      </Router>
  );
}

export default App;
