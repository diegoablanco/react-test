import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StockListComponent from './stock-list-component';

class StockListContainer extends Component {
    static propTypes = {
        className: PropTypes.string,
    }
    static defaultProps = {
        className: '',
    }
    render() {
        const { className } = this.props;

        return (
            <StockListComponent className={className} />
        );
    }
}

StockListContainer.propTypes = {
    className: PropTypes.string,
};

StockListContainer.defaultProps = {
    className: '',
};

export default StockListContainer;
