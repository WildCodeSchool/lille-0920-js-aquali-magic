import './Navbar.css';
import Cards from '../pages/cards';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a to="/">
              <img
                src="https://i.ibb.co/xFMPcrP/magic.jpg"
                alt="Logo du jeu Magic The Gathering"
                id="logo"
              />
            </a>
          </li>
          <li>
            <a href="#a">Histoire</a>
          </li>
          <li>
            <a href="#b"> Règles</a>
          </li>
          <li>
            <a href="#c">Cartes </a>
          </li>
          <li>
            <a href="#d">Créer </a>
          </li>
          <li>
            <a href="#e">Booster</a>
          </li>
        </ul>
        <Cards />
      </nav>
    </div>
  );
};

export default Navbar;
