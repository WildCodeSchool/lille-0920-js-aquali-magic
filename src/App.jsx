import './App.css';
import MainPage from './components/Main';
import Navbar from './components/Navbar';
import Cards from './pages/cards';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Cards />
      </div>
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
