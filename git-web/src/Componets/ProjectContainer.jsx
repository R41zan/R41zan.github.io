import React, { Component } from 'react';
import Projects from './Projects.jsx';
import '../Styles/App.css';

class ProjectContainer extends Component {
    render() {
        return (
            <div style={{ height: '100%', padding: 24, background: 'grey' }}>
                <Projects/>
                <Projects/>
                <Projects/>
            </div>
        );
    }
}

export default ProjectContainer;
