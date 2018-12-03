import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from "react-router-dom";

const { Header } = Layout;

class Navbar extends Component {
  render() {
    return (
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['0']}
          style={{ lineHeight: '64px', display: 'flex', justifyContent: 'center' }}
        >
          <Menu.Item key="1" style={{ width: '10%', textAlign: 'center' }} >
            <Link to="/about-me">
              <Icon type="user" />
              <span className="nav-text">About Me</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2" style={{ width: '10%', textAlign: 'center' }}>
            <Link to="/skills">
              <Icon type="check" />
              <span className="nav-text">Skills</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3" style={{ width: '10%', textAlign: 'center' }}>
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
