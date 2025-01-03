import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import CatalogPage from './components/CatalogPage';
import Footer from './components/footer';
//import ArcadeMachine from './components/ArcadeMachine';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>Hello world from react</h1>

      <CatalogPage></CatalogPage>
      
      <Footer></Footer>    
    </div>
  );
}

export default App;

