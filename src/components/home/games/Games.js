import { useState } from "react";
import Rating from "@mui/material/Rating";
import { priceBRL, arithmeticMeanRating } from "../../../shared/functions";
import { Container } from "./styles";
import Game from "../game/Game";

export default function Games({ rating, ratingValue, url, price, name, _id }) {
  const [game, setGame] = useState(undefined);
  // const value = arithmeticMeanRating(rating);

  function gameContrast() {
    if (game === undefined) return;
    return (
      <Game
        ratingValue={ratingValue}
        rating={rating}
        game={game}
        setGame={setGame}
      />
    );
  }

  return (
    <>
      {gameContrast()}
      <Container onClick={() => setGame({ url, price, name, _id })}>
        <img src={url} alt="game" />
        <div>
          <Rating
            size="small"
            defaultValue={ratingValue}
            precision={0.5}
            readOnly
          />
          <span>({rating.length})</span>
        </div>

        <p>R$ {priceBRL(price)}</p>
      </Container>
    </>
  );
}
