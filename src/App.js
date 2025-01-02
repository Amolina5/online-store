import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>Hello world from react</h1> 
      <Footer></Footer>    
    </div>
  );
}

export default App;

