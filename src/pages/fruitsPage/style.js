import styled from "styled-components";

export const Container = styled.div`
  background: rgb(131, 58, 180);
  background: linear-gradient(
    352deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  color: darkblue;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 800px;
  height: 100px;
  border-radius: 20px;
  p {
    width: 150px;
    height: 80px;
    text-align: center;
    padding-top: 50px;
    border: 2px dotted darkcyan;
    border-radius: 10px;
    background-color: cadetblue;
    font-size: 30px;
    font-weight: bold;
    font-family: "Roboto Mono", sans-serif;
  }
  p:hover {
    background: rgb(80, 128, 31);
    background: linear-gradient(
      347deg,
      rgba(80, 128, 31, 1) 0%,
      rgba(14, 142, 214, 1) 47%,
      rgba(0, 255, 111, 1) 100%
    );
    color: black;
  }
`;
