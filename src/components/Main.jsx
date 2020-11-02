import './Main.css';
import styled from 'styled-components';
import carteGauche from '../../public/image/carte-gauche.png';
import carteMilieu from '../../public/image/carte-milieu.png';
import carteDroite from '../../public/image/carte-droite.png';

const DivFirstSection1 = styled.div`
  background-image: url(https://images8.alphacoders.com/949/thumb-1920-949830.jpg);
  height: 90vh;
  background-position: center;
`;
const DivFirstSection2 = styled.div`
  background-image: url(https://i.ibb.co/YcwdcWf/Zendikar-Rising-resize.png);
  height: 23vh;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const DivSecondSection = styled.div`
  background-image: url(https://i.ibb.co/pQ9gkgW/zendikar-rising.png);
  height: 100vh;
`;

const DivButton = styled.div`
  text-align: center;
`;

const DivTxtHistoire = styled.div`
  padding-top: 10vh;
  width: 100%;
  text-align: center;
`;

const UlCards = styled.ul`
display: flex;
justify-content: center;
}
`;
const LiCards = styled.li`
  height: 10vh;
  padding: 10vh 8vh 0 8vh;
`;

const ButtonGrimoire = styled.button`
margin-top: 40vh;
background-color: black;
border-radius: 30px;
height: 6vh;
}
`;
const A = styled.a`
  &:hover {
    color: rgb(255, 123, 0);
    transition: 0.5s;
  }
`;

const MainPage = () => {
  return (
    <div>
      <section>
        <DivFirstSection1>Aléatoire</DivFirstSection1>
        <DivFirstSection2>Aléatoire</DivFirstSection2>
      </section>
      <section>
        <DivSecondSection>
          <div>
            <DivTxtHistoire>
              <h1>Une nouvelle aventure commence</h1>
              <p>
                Plan tumultueux au mana sauvage, à la météorologie instable et
                aux mystérieux terrains flottants, Zendikar est un monde à la
                beauté et aux dangers naturels incomparables. <br /> Son paysage
                est dévasté par des mouvements sismiques explosifs appelés le
                Roulis dont la violence rend la vie précaire imprévisible et
                pleine d &apos; aventure. Les fleuves venus d &apos; au-dessus
                de l &apos; horizon tombent en cascade.
              </p>
            </DivTxtHistoire>
          </div>

          <div>
            <UlCards>
              <LiCards>
                <img
                  src={carteGauche}
                  alt="Carte de la Canalieuse magmatique"
                  className="Carte"
                />
              </LiCards>
              <LiCards>
                <img
                  src={carteMilieu}
                  alt="Carte de Jace, mage du miroir"
                  className="Carte"
                />
              </LiCards>
              <LiCards>
                <img
                  src={carteDroite}
                  alt="Carte du Lac de montagne bouillant"
                  className="Carte"
                />
              </LiCards>
            </UlCards>
          </div>
          <DivButton>
            <ButtonGrimoire type="button">
              <A>Ouvrir le grimoire de Zendikar</A>
            </ButtonGrimoire>
          </DivButton>
        </DivSecondSection>
      </section>
    </div>
  );
};

export default MainPage;
