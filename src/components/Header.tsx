import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../static/logo.svg';


const Header: React.FC = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Фонд «Серебряное поколение»
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
