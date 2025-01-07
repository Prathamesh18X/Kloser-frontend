import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MobileProvider } from './Context/MobileContext';
import MainLayout from './Layouts/MainLayout';
import Homepage from './Pages/Homepage';
import Cartpage from './Pages/Cartpage';
import BlankPage from './Pages/BlankPage';
import ProductPage from './Pages/ProductPage';
import ReturnPolicy from './Pages/ReturnPolicy';
import AboutUs from './Pages/AboutUs';

const App = () => {
  return (
    <MobileProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/cart' element={<Cartpage />} />
            <Route path='/blankpage' element={<BlankPage />} />
            <Route path='/productpage' element={<ProductPage />} />
            <Route path='/returnpolicy' element={<ReturnPolicy />} />
            <Route path='/aboutus' element={<AboutUs />} />
          </Routes>
        </MainLayout>
      </Router>
    </MobileProvider>
  );
};

export default App;
