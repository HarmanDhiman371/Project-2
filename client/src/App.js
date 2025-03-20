import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './Pages/Main';
import Branding from './Pages/branding';  
import MobilePage from './Pages/mobiles';
import ProductSlider from './components/ProductSlider';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mobiles" element={<MobilePage />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/products" element={<ProductSlider />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
