import React from "react";
import styled from "styled-components";
import Navbar from "../components/Main/Navbar";
import BookList from "../components/BookList/BookList";

function BookListPage() {
  return (
    <div>
      <Container>
        <Navbar />
        <BookList />
      </Container>
    </div>
  );
}

export default BookListPage;

const Container = styled.div`
  width: 90%;
  margin: auto;
`;
