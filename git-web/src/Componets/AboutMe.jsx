import React, { Component } from 'react';
import Foto from './FotoComponent.jsx';
import '../Styles/App.css';

class AboutMe extends Component {
    render() {
        return (
            <div style={{ height:'100%', padding: 24, background: '#fff' }}>
                <Foto/>
            </div>
        );
    }
}

export default AboutMe;
