import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import RouterComponent from './RouterComponent.jsx';
import { BrowserRouter as Router } from "react-router-dom";
import '../Styles/App.css';
import '../Styles/Navbar.css';
import { Layout } from 'antd';

const { Content, Footer } = Layout;


class App extends Component {
  render() {
    return (
      <Router>
        <Layout className='layout' style={{minHeight: '100vh'}}>
          <Navbar />
          <Layout>
            <Content style={{ height: '100%' }}>
              <RouterComponent />
            </Content>
            <Footer style={{ textAlign: 'center', backgroundColor: '#001529', color: 'white'}}>
              Footer
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
