import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from "react-router-dom";
import '../Styles/Navbar.css'

const { Header } = Layout;

class Navbar extends Component {
  render() {
    return (
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px', display: 'flex', justifyContent: 'center' }}
        >
          <Menu.Item key="1" className="menu-item" >
            <Link to="/about-me">
              <Icon type="user" />
              <span className="nav-text">About Me</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2" className="menu-item">
            <Link to="/skills">
              <Icon type="check" />
              <span className="nav-text">Skills</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3" className="menu-item">
            <Link to="/projects" >
              <Icon type="folder-open" />
              <span className="nav-text">Projects</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}
export default Navbar;
