import React from "react";
import HelloMain from "../components/Main/HelloMain";
import styled from "styled-components";
import Bookiz from "../components/Main/Bookiz";
import Navbar from "../components/Main/Navbar";

function MainPage() {
  return (
    <div>
      <Container>
        <Navbar />
        <main>
          <HelloMain />
          <Bookiz />
        </main>
      </Container>
    </div>
  );
}

export default MainPage;

const Container = styled.div`
  width: 1440px;
  margin: auto;
`;
