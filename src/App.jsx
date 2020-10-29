import './App.css';
import Navbar from './components/Navbar';
import Cards from './pages/cards';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Cards />
      </div>
    </div>
  );
}

export default App;
