import './Footer.css';
import styled from 'styled-components';

const A = styled.a`
  &:hover {
    color: rgb(255, 123, 0);
    transition: 0.5s;
  }
`;

const FooterContainer = styled.div`
  background-color: #262626;
  width: 100wv;
  height: 25vh;
`;
const Container1 = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid white;
  height: 17vh;
`;
const Container3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  font-size: 12px;
  border-top: 1px solid white;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 10px;
`;
const Magic = styled.div`
  width: 33vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid white;
  padding: 20px;
`;

const ReseauxSociaux = styled.div`
   display: flex;
    flex-direction: column;
   align-items: center;
  width: 34vw;
  border-right: 1px solid white;
   padding: 20px;
}
`;

const Icones = styled.div`
   width: 80%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   margin: 25px;
}
`;
const Lieux = styled.div`
  width: 33vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px;
`;

const H4 = styled.h4`
  font-size: 20px;
`;
const Adresse = styled.div`
  margin-top: 10px;
`;
const Search = styled.div`
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container1>
        <Magic>
          <H4>Magic The Gathering</H4>
          <Adresse>
            <A href="https://magic.wizards.com/fr">Magic, site officiel</A>
            <p>0320437689</p>
            <p>magic@gmail.com</p>
          </Adresse>
        </Magic>

        <ReseauxSociaux>
          <H4>Nous suivre</H4>
          <Icones>
            <A href="https://www.facebook.com/MagicTheGathering.fr/?brand_redir=201120755306">
              <i className="fab fa-facebook-square" />
            </A>

            <A href="https://twitter.com/wizards_magic">
              <i className="fab fa-twitter-square" />
            </A>

            <A href="https://www.youtube.com/channel/UC8ZGymAvfP97qJabgqUkz4A">
              <i className="fab fa-youtube" />
            </A>

            <A href="https://www.instagram.com/wizards_magic/">
              <i className="fab fa-instagram" />
            </A>

            <A href="https://www.twitch.tv/magic">
              <i className="fab fa-twitch" />
            </A>
          </Icones>
        </ReseauxSociaux>

        <Lieux>
          <H4 id="nousTrouver">Nous trouver</H4>
          <Search>
            <input />
          </Search>
        </Lieux>
      </Container1>

      <Ul>
        <li>
          <A href="#a">CONDITIONS GENERALES</A>
        </li>
        <li>
          <A href="#b">CODE DE CONFIDENTIALITE</A>
        </li>
        <li>
          <A href="#c">EVENEMENTS</A>
        </li>
        <li>
          <A href="#d">EQUIPE</A>
        </li>
        <li>
          <A href="#e">REGLES</A>
        </li>
      </Ul>

      <Container3>
        <p>&copy; Wildcodeschool.com | Designed by Magicians</p>
      </Container3>
    </FooterContainer>
  );
};

export default Footer;
