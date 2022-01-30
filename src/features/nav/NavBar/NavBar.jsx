import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";

export default function NavBar({ history }) {
  // let history = useHistory();
  const [authenticated, setAuthenticated] = useState(true);

  function handleSignIn() {
    setAuthenticated(false);
  }
  function handleSignOut() {
    console.log("hi");
    setAuthenticated(true);
    history.push("/");
  }
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header as={Link} to="/">
          <img src="assets/logo.png" alt="logo" />
          Blog
        </Menu.Item>
        <Menu.Item name="Events" as={Link} to="/events" />
        <Menu.Item name="Events" as={Link} to="/people" />
        <Menu.Item>
          <Button
            floated="right"
            positive
            inverted
            content="Create Event"
            as={Link}
            to="/createEvent"
          />
        </Menu.Item>
        {authenticated ? (
          <SignedInMenu signOut={handleSignIn} />
        ) : (
          <SignedOutMenu signIn={handleSignOut} />
        )}
      </Container>
    </Menu>
  );
}
