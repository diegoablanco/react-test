import React, { Component } from 'react';
import PropTypes from 'prop-types';
import <%=name%>Component from './<%=fileName%>-component';

class <%=name%>Container extends Component {
    render() {
        const { className } = this.props;

        return (
            <<%=name%>Component className={className} />
        );
    }
}

<%=name%>Container.propTypes = {
    className: PropTypes.string,
};

<%=name%>Container.defaultProps = {
    className: '',
};

export default <%=name%>Container;
