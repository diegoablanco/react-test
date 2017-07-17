import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './stock-list-component.scss';

class StockListComponent extends Component {
    static propTypes = {
        className: PropTypes.string
    }
    static defaultProps = {
        className: ''
    }
    render() {
        const { className } = this.props;
        const componentClass = classNames('stock-list-component', className);

        return (
            <div className={componentClass}>
                Stock-list Component
            </div>
        );
    }
}

export default StockListComponent;
