import { useState, useEffect } from "react";
import { Characters } from "./components/Characters";
import { api } from "./services/api";
import { GlobalStyle } from "./styles/global/global";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [count, setCount] = useState(1);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPreviousDisabled, setIsPreviousDisabled] = useState(true);
  const [lastPage, setLastPage] = useState(0);

  function next() {
    setCount(count + 1);
  }

  function previous() {
    setCount(count - 1);
  }
  function theLastPage() {
    setCount(lastPage);
  }
  function theFirstPage() {
    setCount(1);
  }

  useEffect(() => {
    api
      .get(`/character/?page=${count}`)
      .then((res) => {
        const { results } = res.data;
        const { next, prev, pages } = res.data.info;
        setLastPage(pages);
        setIsNextDisabled(next);
        setIsPreviousDisabled(prev);
        setCharacterList(results);
      })
      .catch((err) => console.error(err));
  }, [count]);

  return (
    <>
      <GlobalStyle />
      <Characters
        firstPage={count > 2 && theFirstPage}
        lastPage={isNextDisabled && theLastPage}
        nextPage={isNextDisabled && next}
        previousPage={isPreviousDisabled && previous}
        characterList={characterList}
      />
    </>
  );
}

export default App;
