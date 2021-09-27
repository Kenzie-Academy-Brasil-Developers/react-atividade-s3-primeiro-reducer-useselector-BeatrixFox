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
  }
`;
