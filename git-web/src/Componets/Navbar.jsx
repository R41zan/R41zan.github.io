import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from "react-router-dom";

const { Sider } = Layout;

class Navbar extends Component {
  render() {
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => { console.log(broken); }}
        onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" >
            <Link to="/">
              <Icon type="user" />
              <span className="nav-text">About Me</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/history">
              <Icon type="calendar" />
              <span className="nav-text">History</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/projects" ></Link>
            <Icon type="folder-open" />
            <span className="nav-text">Projects</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
export default Navbar;
