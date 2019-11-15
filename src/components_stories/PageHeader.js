import React from "react";
import { Link } from 'react-router-dom'

import { Image, Menu, Dropdown, Button, Container } from "semantic-ui-react";

//Component
import PageHeaderPhoto from './PageHeaderPhoto'

export default function pageHeader() {
  return (
    <Container style={{width:'100%'}} >
    <Menu stackable size="huge" style={{ margin: "0" }}>
      <Menu.Item>
        <img
          src="https://i.ibb.co/9YNWNDT/refugee-stories-icon.png"
          alt="Logo"
        />
      </Menu.Item>

      <Menu.Item name="features">About Us</Menu.Item>

      <Menu.Item name="testimonials">Families</Menu.Item>

      <Menu.Menu position="right">
        <Dropdown item text="Language">
          <Dropdown.Menu>
            <Dropdown.Item>English</Dropdown.Item>
            <Dropdown.Item>Arabic</Dropdown.Item>
            <Dropdown.Item>Spanish</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item>
          <Link >
          <Button primary>Sign In</Button>
          </Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
    <PageHeaderPhoto />
    </Container>
  );
}
