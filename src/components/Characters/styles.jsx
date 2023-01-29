import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: #f3f3b2;
  width: 100vw;
  height: 100vh;

  h1 {
    font-weight: 600;
    font-size: 1.25rem;
  }
  .divCards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
  }

  @media (min-width: 768px) {
    .divCards {
      margin-top: 10rem;
    }
  }
`;

export const Button = styled.button`
  border: transparent;
  background-color: transparent;
  color: #288880;
  font-weight: 600;
  font-family: "Patrick Hand", cursive;
  font-size: 1rem;

  @media (min-width: 768px) {
    :hover {
      color: #6ec7c0;
    }
  }
`;
