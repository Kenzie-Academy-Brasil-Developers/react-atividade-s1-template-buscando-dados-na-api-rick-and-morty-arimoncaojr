import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  width: 10rem;
  height: 16rem;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 8px;
  animation: rotate 1s;
  @keyframes rotate {
    to {
      transition: transform 1s;
      transform-style: preserve-3d;
      transform: rotateY(360deg);
    }
  }
  cursor: pointer;
  @media (min-width: 768px) {
    :hover {
      margin-top: -10px;
      box-shadow: 0 4px 4px black;
      transition: all 0.2s ease-in-out;
    }
  }
  h2 {
    text-align: center;
    margin-top: 10px;
    font-weight: 600;
    font-size: 1rem;
  }
  img {
    width: 80%;
    margin-bottom: 10px;
  }

  p {
    color: gold;
    font-weight: 600;
    text-align: center;
    font-size: 1rem;
  }
`;
export const BackCard = styled(Card)`
  gap: 5px;
  @media (min-width: 768px) {
    :hover {
      margin-top: unset;
      box-shadow: unset;
      transition: unset;
    }
  }
  animation: rotate 1s;
  @keyframes rotate {
    to {
      transition: transform 1s;
      transform-style: preserve-3d;
      transform: rotateY(360deg);
    }
  }
  h3 {
    font-weight: 600;
    text-align: center;
    font-size: 1rem;
    color: black;
  }
  p {
    color: black;
  }
`;

export const Span = styled.span`
  color: ${(props) => props.color};
`;
