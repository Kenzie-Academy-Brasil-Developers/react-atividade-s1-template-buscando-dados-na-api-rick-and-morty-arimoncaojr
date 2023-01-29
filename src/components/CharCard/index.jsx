import { useState } from "react";
import { Card, BackCard, Span } from "./styles";

export const CharCard = ({
  name,
  status,
  image,
  gender,
  species,
  origin,
  location,
  create,
  className,
}) => {
  const [frontCard, setFrontCard] = useState(true);
  const [backCard, setBackCard] = useState(false);

  function showBackCard() {
    setFrontCard(false);
    setBackCard(true);
  }

  function showFrontCard() {
    setFrontCard(true);
    setBackCard(false);
  }
  return (
    <>
      {frontCard && (
        <Card
          className={status}
          onClick={() => {
            showBackCard();
          }}
        >
          <h2>{name.length > 15 ? name.substring(0, 15) + "..." : name}</h2>
          <img src={image} alt="" />
          <p className={gender}>{gender}</p>
          <p className={species}>{species}</p>
        </Card>
      )}

      {backCard && (
        <BackCard className={status} onClick={() => showFrontCard()}>
          <h3>
            Nome: <Span color={"purple"}>{name}</Span>
          </h3>
          <p>
            Status: <Span color={"purple"}>{status}</Span>
          </p>
          <p>
            Gênero: <Span color={"purple"}>{gender}</Span>
          </p>
          <p>
            Espécie: <Span color={"purple"}>{species}</Span>
          </p>
          <p>
            Origem: <Span color={"purple"}>{origin}</Span>
          </p>
          <p>
            Localização: <Span color={"purple"}>{location}</Span>
          </p>
          <p>
            Data da criação: <Span color={"purple"}>{create}</Span>
          </p>
        </BackCard>
      )}
    </>
  );
};
