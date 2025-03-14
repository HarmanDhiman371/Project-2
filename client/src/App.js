import './App.css';
import Navbar from './components/Navbar'
import  Main from './Pages/Main'
import Acessories from './components/acessories';
function App() {
  return (
    <div className="App">
       <Navbar/>
       <Main/>
       <Acessories/>
    </div>
  );
}

export default App;
