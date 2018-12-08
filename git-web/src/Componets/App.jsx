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
        <Layout className='layout'>
          <Navbar />
          <Layout>
            <Content style={{marginBottom:'5vh', marginTop:'5vh'}}>
              <RouterComponent />
            </Content>
            <Footer style={{ textAlign: 'center', backgroundColor: '#001529', color: 'white',  position: 'fixed', left: '0', bottom: '0', width: '100%'}}>
              Footer
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
