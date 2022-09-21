import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  align-self: flex-start;
  width: 23%;
  animation: all 0.3sec;

  :hover {
    transform: scale(1.1);
  }

  div {
    position: absolute;
    margin-top: 4rem;
    color: white;
  }
`;
