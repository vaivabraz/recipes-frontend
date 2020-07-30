import React from "react";
import styled from "styled-components";
import { Colors, maxPageWidth } from "../constants";
import { Link } from "gatsby";

const MenuContainer = styled.div`
  height: 60px;
  background: ${Colors.MainBlue};
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const List = styled.ul`
  width: 100%;
  max-width: ${maxPageWidth};
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const ListItem = styled.li`
  display: inline;
  margin-right: 30px;
`;

const LinkComponent = styled(Link)`
  text-decoration: none;
  color: ${Colors.Unselected};
`;

const activeLinkStyle = {
  color: Colors.Action,
};

const Menu = () => (
  <MenuContainer>
    <List>
      <ListItem>
        <LinkComponent to="/" activeStyle={activeLinkStyle}>
          {" "}
          <h4>Active messages</h4>
        </LinkComponent>
      </ListItem>
      <ListItem>
        <LinkComponent to="/createNew" activeStyle={activeLinkStyle}>
          {" "}
          <h4>Create new</h4>
        </LinkComponent>
      </ListItem>
      <ListItem>
        <LinkComponent
          to="/managePredefinedMessages"
          activeStyle={activeLinkStyle}
        >
          {" "}
          <h4>Manage predefined messages</h4>
        </LinkComponent>
      </ListItem>
      <ListItem>
        <LinkComponent to="/history" activeStyle={activeLinkStyle}>
          {" "}
          <h4>History</h4>
        </LinkComponent>
      </ListItem>
      <ListItem>
        <LinkComponent to="/colors" activeStyle={activeLinkStyle}>
          {" "}
          <h4>Colors (delete after!!!)</h4>
        </LinkComponent>
      </ListItem>
    </List>
  </MenuContainer>
);

export default Menu;
