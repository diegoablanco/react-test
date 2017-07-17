import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './<%=fileName%>-component.scss';

class <%=name%>Component extends Component {
    render() {
        const { className } = this.props;
        const componentClass = classNames('<%=fileName%>-component', className);

        return (
            <div className={componentClass}>
                <%=name%> Component
            </div>
        );
    }
}

<%=name%>Component.propTypes = {
    className: PropTypes.string,
};

<%=name%>Component.defaultProps = {
    className: '',
};

export default <%=name%>Component;
