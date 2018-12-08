import React, { Component } from 'react';
import { Icon } from 'antd';
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect style={{minHeight:'5vh', position: 'fixed',
      top: '0', width: '100%',backgroundColor: '#001529', zIndex:'10000'}}>
        <Navbar.Header>
          <Navbar.Brand>
            {/* eslint-disable-next-line */}
            <a>React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem>
              <Link to="/about-me">
                <Icon type="user" />
                <span className="nav-text">About Me</span>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/skills">
                <Icon type="check" />
                <span className="nav-text">Skills</span>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/projects" >
                <Icon type="folder-open" />
                <span className="nav-text">Projects</span>
              </Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar;