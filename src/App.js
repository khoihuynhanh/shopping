import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import pages
import Home from './pages/Home/index'
import ProductDetails from './pages/ProductDetails/index'

// import components
import Sidebar from './components/Sidebar/index'
import Header from './components/Header/index'
import Footer from './components/Footer/index'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
      <Sidebar />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
