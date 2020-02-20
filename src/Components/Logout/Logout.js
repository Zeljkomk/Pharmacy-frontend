import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class logout extends Component {
    componentWillMount() {
        localStorage.removeItem('username');

    }


    render() {
        return (
                <Redirect to="/"/>
        );
    }
};

export default logout;