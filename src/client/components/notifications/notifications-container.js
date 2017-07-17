import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notifications from './notifications-component';

class NotificationsContainer extends Component {
    constructor(props) {
        super(props);

        this._deleteNotification = this._deleteNotification.bind(this);
    }

    render() {
        const { className, notifications } = this.props;

        return (
            <Notifications className={className}
                           notifications={notifications}
                           deleteNotification={this._deleteNotification} />
        );
    }

    _deleteNotification(id) {
        const { actions } = this.props;

        actions.deleteNotification && actions.deleteNotification(id);
    }
}

NotificationsContainer.propTypes = {
    className: PropTypes.string,
    notifications: PropTypes.array,

    actions: PropTypes.shape({
        deleteNotification: PropTypes.func.isRequired,
    }),
};

export default NotificationsContainer;
