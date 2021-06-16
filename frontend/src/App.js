import React from 'react';
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen'
import Footer from './components/Footer';

const App = () => {
  return (
    <>

      <Header />

      <main className='py-5'>
        <Container>
          <h1>
            <HomeScreen />
          </h1>
        </Container>        
      </main>

      <Footer />      

    </>
  );
}

export default App;
