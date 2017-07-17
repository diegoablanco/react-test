import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { Provider } from 'react-redux';
import { router } from './router.js';

export default class App extends Component {
    render() {
        const { store } = this.props;

        return (
            <Provider store={store}>
                {router}
            </Provider>
        );
    }
}

App.propTypes = {
    store: PropTypes.object.isRequired,
};
