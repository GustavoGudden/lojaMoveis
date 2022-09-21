import styled from "styled-components";

export const Area = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem;
`;
export const DivImg = styled.div`
  width: 25%;
  border-radius: 7px;
  height: 200px;
  background-color: #e8cbb4;
  background-image: url(https://i.ibb.co/FqJwnG5/buildings-gf84dc12b4-1280.jpg);
  background-size: 100% 100%;
`;
export const TextArea = styled.div`
  width: 25%;

  height: 200px;
  padding: 7px;
  margin-top: 5rem;
  background-color: #eae1d7;
  border-radius: 7px;
  h1 {
    color: #8b4513;
    font-size: 25px;
  }
  p {
    font-weight: 300;
    padding-top: 7px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  gap: 1rem;
`;
