import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './stock-details-component.scss';

class StockDetailsComponent extends Component {
    render() {
        const { className } = this.props;
        const componentClass = classNames('stock-details-component', className);

        return (
            <div className={componentClass}>
                Stock-details Component
            </div>
        );
    }
}

StockDetailsComponent.propTypes = {
    className: PropTypes.string,
};

StockDetailsComponent.defaultProps = {
    className: '',
};

export default StockDetailsComponent;
