import { useEffect, useState } from "react";
import { get } from "axios";
import { useAuth } from "../../../context/auth";
import Header from "../../shared/header/Header";
import Games from "../games/Games";
import { arithmeticMeanRating } from "../../../shared/functions";
import { ThreeCircles } from "react-loader-spinner";
import { Container, Content, App, BoxGames, SelectBox } from "./styles";

export default function HomeScreen() {
  const { user, setUser } = useAuth();
  const [games, setGames] = useState({ value: undefined });
  const [filter] = useState({ value: "" });

  useEffect(() => {
    async function fetchData() {
      const URL = process.env.REACT_APP_API_URL;

      const { data } = await get(`${URL}/games`);

      function calcRating(arr) {
        const aux = [];

        for (const game of arr) {
          aux.push({ ...game, ratingValue: arithmeticMeanRating(game.rating) });
        }
        return aux;
      }
      const games = calcRating(data);

      user.games = games;

      setGames({ ...games, value: games });

      const getToken = localStorage.getItem("token");

      if (getToken !== null && user.token === undefined) {
        const token = JSON.parse(getToken);

        user.token = token;
      }

      if (user.token !== undefined) {
        const config = { headers: { Authorization: `Bearer ${user.token}` } };

        const { data: res } = await get(`${URL}/user`, config);
        let { email, name, picture, cart, purchases } = res;

        if (user.cart.length > 0) {
          user.cart = user.cart.filter(({ _id }) => {
            for (const gamePurchase of purchases) {
              if (gamePurchase._id === _id) return false;
            }
            return true;
          });

          setUser({ ...user, email, name, picture, purchases });
        } else {
          setUser({ ...user, email, name, picture, cart, purchases });
        }
      }
    }

    fetchData().catch(error => console.log(error));
  }, []);

  function hanleChangeFilter(e) {
    const value = e.target.value;
    filter.value = value;

    switch (true) {
      case filter.value === "1":
        games.value = games.value.sort((a, b) => b.ratingValue - a.ratingValue);
        break;

      case filter.value === "2":
        games.value = games.value.sort((a, b) => a.price - b.price);
        break;

      case filter.value === "3":
        games.value = games.value.sort((a, b) => b.price - a.price);
        break;

      case filter.value === "4":
        games.value = games.value.sort((a, b) => b.name < a.name);
        break;

      case filter.value === "5":
        games.value = games.value.sort((a, b) => a.name < b.name);
        break;

      default:
        break;
    }
    setGames({ ...games });
  }

  function loading() {
    if (games.value === undefined)
      return (
        <ThreeCircles
          color="#1156be"
          height={160}
          width={160}
          ariaLabel="three-circles-rotating"
        />
      );

    return (
      <BoxGames>
        <SelectBox>
          <span>Ordenar Por:</span>
          <select value={filter.value} onChange={e => hanleChangeFilter(e)}>
            <option value="" disabled>
              -
            </option>
            <option value="1">Melhor avaliação</option>
            <option value="2">Menor preço</option>
            <option value="3">Maior preço</option>
            <option value="4">Alfabética [a-z]</option>
            <option value="5">Alfabética [z-a]</option>
          </select>
        </SelectBox>
        {games.value.map(
          ({ rating, ratingValue, url, price, name, _id }, index) => (
            <Games
              rating={rating}
              ratingValue={ratingValue}
              name={name}
              url={url}
              price={price}
              _id={_id}
              key={index}
            />
          )
        )}
      </BoxGames>
    );
  }

  return (
    (user === null || user !== null) && (
      <Container>
        <App>
          <Header />
          <Content>{loading()}</Content>
        </App>
      </Container>
    )
  );
}
