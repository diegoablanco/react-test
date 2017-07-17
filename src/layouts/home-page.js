import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';

const HomePage = ({ children }) => {
    return (
        <section className="page-content">
            <Header />
            {children}
        </section>
    );
};

HomePage.propTypes = {
    children: PropTypes.any,
};

export default HomePage;
