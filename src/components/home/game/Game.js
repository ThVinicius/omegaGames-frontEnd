import { useAuth } from "../../../context/auth";
import Rating from "@mui/material/Rating";
import { post } from "axios";
import { priceBRL } from "../../../shared/functions";
import { verifyGame } from "./functions";
import { Container, Content } from "./styles";

export default function Game({ rating, ratingValue, game, setGame }) {
  const { name, url, price, _id } = game;
  const { user, setUser } = useAuth();

  function addCart() {
    setUser({
      ...user,
      cart: [...user.cart, { name, url, price, _id, userRating: 0 }]
    });

    if (user.token !== undefined) {
      const URL = process.env.REACT_APP_API_URL;

      const body = game;

      const config = { headers: { Authorization: `Bearer ${user.token}` } };

      const promise = post(`${URL}/cart/${_id}`, body, config);

      promise.then(() => {}).catch(() => {});
    }

    setGame(undefined);
  }

  return (
    <Container>
      <Content>
        <div>
          <h1>{name}</h1>
          <img src={url} alt="game" />
          <i>
            <Rating
              size="large"
              defaultValue={ratingValue}
              precision={0.5}
              readOnly
            />
            <p>({rating.length})</p>
          </i>
          <h2>R$ {priceBRL(price)}</h2>
        </div>
        <div>
          <button onClick={() => setGame(undefined)}>Cancelar</button>
          {verifyGame(user, _id, addCart)}
        </div>
      </Content>
    </Container>
  );
}
