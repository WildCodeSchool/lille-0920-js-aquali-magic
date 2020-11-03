import './Navbar.css';
import styled from 'styled-components';
import logoMagic from '../../public/image/Logo-magic.jpg';

const NavigationBar = styled.nav`
  background-color: black;
  height: 15vh;
`;
const Ul = styled.ul`
  display: flex;
  align-items: center;
`;

const Li = styled.li`
  padding-right: 3vw;
  display: flex;
  justify-content: space-between;
`;

const A = styled.a`
  padding-right: 1.5vw;
  font-size: 1.5em;
  &:hover {
    color: rgb(255, 123, 0);
    transition: 0.5s;
  }
`;
const Logo = styled.img`
  width: 20vw;
  height: 15vh;
`;

const Navbar = () => {
  return (
    <NavigationBar className="navList">
      <Ul>
        <Li>
          <A href="#a">
            <Logo
              src={logoMagic}
              alt="Logo du jeu Magic The Gathering"
              id="logo"
            />
          </A>
        </Li>
        <Li>
          <A href="#b">Histoire</A>
        </Li>
        <Li>
          <A href="#b"> Règles</A>
        </Li>
        <Li>
          <A href="#c">Cartes </A>
        </Li>
        <Li>
          <A href="#d">Créer </A>
        </Li>
        <Li>
          <A href="#e">Booster</A>
        </Li>
      </Ul>
    </NavigationBar>
  );
};

export default Navbar;
