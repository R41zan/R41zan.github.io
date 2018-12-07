import React, { Component } from 'react';
import Projects from './Projects.jsx';
import '../Styles/App.css';

import { Row, Col } from 'antd';

class ProjectContainer extends Component {
    render() {
        return (
            <div style={{ height: '100%', padding: 24, background: 'grey' }}>
                <Row>
                    <Col span={8} style={{ height: '100%', padding: 24, background: 'grey' }}><Projects/></Col>
                    <Col span={8} style={{ height: '100%', padding: 24, background: 'grey' }}><Projects/></Col>
                    <Col span={8} style={{ height: '100%', padding: 24, background: 'grey' }}><Projects/></Col>
                </Row>
                
            </div>
        );
    }
}

export default ProjectContainer;
