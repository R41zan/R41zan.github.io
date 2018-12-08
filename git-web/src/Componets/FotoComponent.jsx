import React, { Component } from 'react';
import '../Styles/App.css';

class Foto extends Component {
    render() {
        return (
            <div style={{ height:'100%', padding: 24, background: '#fff' }}>
                <img src="https://via.placeholder.com/250" alt=""/>
            </div>
        );
    }
}

export default Foto;
