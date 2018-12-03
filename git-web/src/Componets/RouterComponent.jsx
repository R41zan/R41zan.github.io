import React, { Component } from 'react';
import Skills from './Skills.jsx';
import AboutMe from './AboutMe.jsx';
import Projects from './Projects.jsx';
import Welcome from './Welcome.jsx';
import { Route } from "react-router-dom";

class RouterComponent extends Component {
    render() {
        return (
            [   
                //<Route key='0' path="/" component={Welcome} />,
                <Route key='1' path="/about-me" component={AboutMe} />,
                <Route key='2' path="/skills" component={Skills}  />,
                <Route key='3' path="/projects" component={Projects}  />,
            ]

        );
    }
}

export default RouterComponent;
