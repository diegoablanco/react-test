import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './loading.scss';

const LoadingComponent = ({className, size}) => {
    const componentClass = classNames('loading-component', className, size);

    return (
        <span className={componentClass} />
    );
};

LoadingComponent.propTypes = {
    className: PropTypes.string,
    size: PropTypes.string,
};

export default LoadingComponent;
