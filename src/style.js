import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  main {
    background: rgb(34, 193, 195);
    background: linear-gradient(
      86deg,
      rgba(34, 193, 195, 1) 0%,
      rgba(253, 187, 45, 1) 100%
    );
    width: 900px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
