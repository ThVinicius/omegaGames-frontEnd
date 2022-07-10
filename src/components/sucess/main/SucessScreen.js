import { Link } from "react-router-dom";
import PurchasedGames from "../purchasedGames/PurchasedGames";
import { Container, Content, ButtonContainer, GamesContainer } from "./styles";

const games = [
  {
    name: "The Witcher 3-Wild-Hunt 2",
    url: "https://i.ibb.co/3h2KbDw/The-Witcher-3-Wild-Hunt-2.png",
    price: 96.8,
    rating: []
  },
  {
    name: "The Witcher Enhanced Edition 1",
    url: "https://i.ibb.co/4tr2Gcp/The-Witcher-Enhanced-Edition-1.png",
    price: 93.7,
    rating: []
  },
  {
    name: "Watch Dogs",
    url: "https://i.ibb.co/BBYX1ZX/Watch-Dogs.png",
    price: 97.5,
    rating: []
  },
  {
    name: "Grand Theft Auto-V",
    url: "https://i.ibb.co/Nt5Sw97/Grand-Theft-Auto-V.png",
    price: 88.3,
    rating: []
  },
  {
    name: "World War Z",
    url: "https://i.ibb.co/TPhhNM8/World-War-Z.png",
    price: 85.3,
    rating: []
  },
  {
    name: "FIFA 21",
    url: "https://i.ibb.co/Nxb2Ss0/FIFA-21.png",
    price: 120.9,
    rating: []
  },
  {
    name: "Dark Souls Remastered",
    url: "https://i.ibb.co/zFzGrL2/Dark-Souls-Remastered.png",
    price: 89.3,
    rating: []
  },
  {
    name: "Dark Souls II",
    url: "https://i.ibb.co/jT79KLp/Dark-Souls-II.png",
    price: 85.6,
    rating: []
  },
  {
    name: "Dark Souls III",
    url: "https://i.ibb.co/pzzn3Xc/Dark-Souls-III-2.png",
    price: 85.9,
    rating: []
  },
  {
    name: "Far Cry 3",
    url: "https://i.ibb.co/7G1GRwj/Far-Cry-3.png",
    price: 99.6,
    rating: []
  },
  {
    name: "Batman Arkham Knight",
    url: "https://i.ibb.co/Ytrw90K/Batman-Arkham-Knight.png",
    price: 92.9,
    rating: []
  },
  {
    name: "Cuphead",
    url: "https://i.ibb.co/tLb3BR5/Cuphead.png",
    price: 77.5,
    rating: []
  },
  {
    name: "Assassin's Creed Valhalla",
    url: "https://i.ibb.co/StMwjB7/Assassin-s-Creed-Valhalla.png",
    price: 85.3,
    rating: []
  },
  {
    name: "Assassin's Creed Origins",
    url: "https://i.ibb.co/jR8s5jD/Assassin-s-Creed-Origins.png",
    price: 84.9,
    rating: []
  },
  {
    name: "Assassin's Creed Odyssey",
    url: "https://i.ibb.co/bbgkDS6/Assassin-s-Creed-Odyssey.png",
    price: 82.9,
    rating: []
  },
  {
    name: "Assassin's Creed IV-Black Flag",
    url: "https://i.ibb.co/hCzXkxn/Assassin-s-Creed-IV-Black-Flag.png",
    price: 86.3,
    rating: []
  },
  {
    name: "Assassin's Creed III Remastered",
    url: "https://i.ibb.co/FV95JVx/Assassin-s-Creed-III-Remastered.png",
    price: 84.8,
    rating: []
  },
  {
    name: "Assassin's Creed Brotherhood",
    url: "https://i.ibb.co/gTP3rCr/Assassin-s-Creed-Brotherhood.png",
    price: 81.9,
    rating: []
  },
  {
    name: "Assassin's Creed 2",
    url: "https://i.ibb.co/WPmhVmt/Assassin-s-Creed-2.png",
    price: 82.9,
    rating: []
  },
  {
    name: "Assassin's Creed 1",
    url: "https://i.ibb.co/Ksg808k/Assassin-s-Creed-1.png",
    price: 87.7,
    rating: []
  },
  {
    name: "Among Us",
    url: "https://i.ibb.co/HG7wwX4/Among-Us.png",
    price: 50.3,
    rating: []
  }
];

export default function SucessScreen() {
  return (
    <Container>
      <header>
        <h1>OMEGA</h1>
      </header>
      <Content>
        <h1>Compra realizada com sucesso!</h1>
        <GamesContainer>
          {games.map(({ url, price }) => (
            <PurchasedGames url={url} price={price} />
          ))}
        </GamesContainer>
      </Content>
      <ButtonContainer>
        <Link to="/">
          <button>
            <span>Voltar pra home</span>
            <ion-icon name="home"></ion-icon>
          </button>
        </Link>
      </ButtonContainer>
    </Container>
  );
}
