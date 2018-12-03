import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import RouterComponent from './RouterComponent.jsx';
import { BrowserRouter as Router } from "react-router-dom";
import '../Styles/App.css';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;


class App extends Component {
  render() {
    return (
      <Router>
        <Layout className='layout'>
          <Navbar />
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ height: '100%' }}>
              <RouterComponent />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
