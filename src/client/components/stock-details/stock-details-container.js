import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StockDetailsComponent from './stock-details-component';

class StockDetailsContainer extends Component {
    render() {
        const { className } = this.props;

        return (
            <StockDetailsComponent className={className} />
        );
    }
}

StockDetailsContainer.propTypes = {
    className: PropTypes.string,
};

StockDetailsContainer.defaultProps = {
    className: '',
};

export default StockDetailsContainer;
