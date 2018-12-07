import React, { Component } from 'react';
import Projects from './Projects.jsx';
import '../Styles/App.css';

import { Row, Col } from 'antd';

class ProjectContainer extends Component {
    render() {
        return (
            <div>
                <Row >
                    <Col span={8} style={{ padding: 20 }}><Projects /></Col>
                    <Col span={8} style={{ padding: 20 }}><Projects /></Col>
                    <Col span={8} style={{ padding: 20 }}><Projects /></Col>
                    <Col span={8} style={{ padding: 20 }}><Projects /></Col>
                </Row>
            </div>
        );
    }
}

export default ProjectContainer;
