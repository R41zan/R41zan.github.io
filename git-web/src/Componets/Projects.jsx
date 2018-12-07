import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import '../Styles/App.css';

class Projects extends Component {
    render() {
        return (
            <Panel bsStyle="primary">
                <Panel.Heading>Title</Panel.Heading>
                <Panel.Body>Panel content</Panel.Body>
            </Panel>
        );
    }
}

export default Projects;
