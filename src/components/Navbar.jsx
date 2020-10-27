import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#a">
            <img
              src="https://i.ibb.co/xFMPcrP/magic.jpg"
              alt="Logo du jeu Magic The Gathering"
              id="logo"
            />
          </a>
        </li>
        <li>
          <a href="#b">Histoire</a>
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
    </nav>
  );
};

export default Navbar;
