import { Button, Card, Navbar } from "./lib/index";
import React from "react";
import "@jokay03j-v2/sasslib";

function App(): JSX.Element {
  return (
    <div>
      <Navbar
        color="error"
        navbarTitle="test"
        className="text--white"
        menuBtnChildren={"menu"}
      >
        <Navbar.Item className="">test</Navbar.Item>
        <Navbar.Item className="pl--1 text--black md--text--white">
          uhfeug
        </Navbar.Item>
      </Navbar>
      <Card className="">
        <Card.Title as="h2">titre card</Card.Title>
        <Card.Body className="text--gray">test body card</Card.Body>
      </Card>
      <Button color="primary" className="text--white">
        test
      </Button>
    </div>
  );
}

export default App;
