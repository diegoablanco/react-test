import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const LayoutFullPage = ({children, className}) => {
    const componentClass = classNames('layout-full-page page-layout base-view fadeIn fast', className);

    return (
        <section className={componentClass}>
            {children}
        </section>
    );
};

LayoutFullPage.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
};

export default LayoutFullPage;
