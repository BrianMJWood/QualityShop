import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <main className='py-3'>
            <Routes>
              <Route path='/' element={<HomeScreen />} exact />
              <Route path='/product/:id' element={<ProductScreen />} />
            </Routes>
        </main>
      </Container>

      <Footer />
    </Router>

  );
}

export default App;
