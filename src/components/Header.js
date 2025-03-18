import React from "react";
import styled from "styled-components";

export default function Header() {
    return (
        <>
            {/* <Container>
                <img src="../../public/assets/game-logo.png"  alt="logo"/>
            <h1>Tic-Tac-Toe</h1>
            </Container> */}
        </>
    )
}

const Container = styled.header`
  text-align: center;
  font-size: 2rem;
  color: white;
  background-color: #007bff;
  padding: 10px;
  border-radius: 5px;
`;