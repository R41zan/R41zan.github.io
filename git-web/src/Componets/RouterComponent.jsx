import React, { Component } from 'react';
import History from './History.jsx';
import AboutMe from './AboutMe.jsx';
import Projects from './Projects.jsx';
import { Route } from "react-router-dom";

class RouterComponent extends Component {
    render() {
        return (
            [
                <Route key='1' path="/" component={AboutMe} />,
                <Route key='2' path="/history" component={History}  />,
                <Route key='3' path="/project" component={Projects}  />,
            ]

        );
    }
}

export default RouterComponent;
