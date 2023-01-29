import { CharCard } from "../CharCard";
import { Container, Button } from "./styles";

export const Characters = ({
  characterList,
  nextPage,
  previousPage,
  firstPage,
  lastPage,
}) => {
  return (
    <Container>
      <h1>Personagens Rick&Morty</h1>
      <div className="divCards">
        {characterList.map((character) => (
          <CharCard
            key={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            status={character.status}
            origin={character.origin.name}
            location={character.location.name}
            create={character.created}
          />
        ))}
      </div>
      <div className="divButtons">
        {firstPage && (
          <Button type="button" onClick={() => firstPage()}>
            {"<<"}
          </Button>
        )}
        {previousPage && (
          <Button type="button" onClick={() => previousPage()}>
            Back
          </Button>
        )}
        {nextPage && (
          <Button type="button" onClick={() => nextPage()}>
            Next
          </Button>
        )}
        {lastPage && (
          <Button type="button" onClick={() => lastPage()}>
            {">>"}
          </Button>
        )}
      </div>
    </Container>
  );
};
