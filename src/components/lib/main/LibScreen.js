import { useContext } from "react";
import { useAuth } from "../../../context/auth";
import { UserContext } from "../../../context/userContext";
import Header from "../../shared/header/Header";
import UserGame from "../gameUser/UserGame";

import { Container, Content } from "./styles";

export default function LibScreen() {
  const { user } = useAuth();
  console.log(user.purchases);
  return (
    <Container>
      <Header />
      <Content>
        {user.purchases.map(({ _id, name, url, userRating }, index) => (
          <UserGame
            _id={_id}
            name={name}
            url={url}
            userRating={userRating}
            key={index}
          />
        ))}
      </Content>
    </Container>
  );
}
