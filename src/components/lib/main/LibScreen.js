import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import Header from "../../shared/header/Header";
import UserGame from "../gameUser/UserGame";

import { Container, Content } from "./styles";

export default function LibScreen() {
  const { user } = useContext(UserContext);
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
