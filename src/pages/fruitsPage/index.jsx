//importando useSelector do react-redux
import { useSelector } from "react-redux";
import { Container } from "./style";

const FruitsPage = () => {
  //acessando o estado global e pegando o state fruits
  const fruits = useSelector((state) => state.fruits);

  return (
    <Container>
      {fruits.map((fruit) => (
        <p key={fruit}> {fruit} </p>
      ))}
    </Container>
  );
};

export default FruitsPage;
