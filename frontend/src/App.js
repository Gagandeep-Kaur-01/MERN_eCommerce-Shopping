import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import Footer from './components/Footer';

const App = () => {
  return (


    <Router>

      <Header />

      <main className='py-5'>
        <Container>
          <Route path='/login' component={ LoginScreen } />          
          <Route path='/product/:id' component={ ProductScreen } />
          <Route path='/cart/:id?' component={ CartScreen } />
          <Route path='/' component={ HomeScreen } exact />
        </Container>        
      </main>

      <Footer />      

    </Router>
  );
}

export default App;
