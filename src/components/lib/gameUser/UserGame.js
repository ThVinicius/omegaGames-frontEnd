import { useState, useContext } from "react";
import { put } from "axios";
import { UserContext } from "../../../context/userContext";
import Rating from "@mui/material/Rating";
import { arithmeticMeanRating } from "../../../shared/functions";
import { ratingGame, loadingSpinner, disabledRating } from "./functions";
import { Container, RatingBox } from "./styles";

export default function UserGame({ _id, name, url, userRating }) {
  const { user } = useContext(UserContext);
  const [input] = useState({ value: userRating });
  const [loading, setLoading] = useState({ value: false, spinner: undefined });
  const [rating] = useState(ratingGame(user, arithmeticMeanRating, _id));

  async function changeRating(newValue) {
    const initialValue = Number(input.value);

    input.value = newValue;
    newValue = Number(newValue);

    setLoading({ ...loading, value: true, spinner: true });

    const URL = process.env.REACT_APP_API_URL;

    const body = { initialValue, newValue };

    const config = { headers: { Authorization: `Bearer ${user.token}` } };

    try {
      const { data } = await put(`${URL}/rating/${_id}`, body, config);

      rating.value = arithmeticMeanRating(data.rating);

      setLoading({ ...loading, value: false, spinner: false });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <img src={url} alt="jogo" />
      <div>
        <h1>{name}</h1>
        <RatingBox>
          <h2>Sua avaliação: </h2>
          <i>
            <Rating
              size="large"
              disabled={disabledRating(loading)}
              value={input.value}
              onChange={(_, newValue) => changeRating(newValue)}
            />
            {loadingSpinner(loading)}
          </i>
        </RatingBox>
        <RatingBox>
          <h2>Avaliação geral ({rating.total}) :</h2>
          <Rating size="large" value={rating.value} precision={0.5} readOnly />
        </RatingBox>
      </div>
    </Container>
  );
}
