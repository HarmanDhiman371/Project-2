import './App.css';
import Navbar from './components/Navbar'
import  Main from './Pages/Main'
import Acessories from './components/acessories';
import ProductSlider from './components/ProductSlider';
function App() {
  return (
    <div className="App">
       <Navbar/>
       <Main/>
       <Acessories/>
       <ProductSlider/>
    </div>
  );
}

export default App;
