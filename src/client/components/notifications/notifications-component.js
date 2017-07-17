import React from 'react';
import PropTypes from 'prop-types';
import { I18n } from 'react-redux-i18n';
import classNames from 'classnames';
import get from 'lodash/get';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import orderBy from 'lodash/orderBy';
import Message from 'spark-react/message';
import Button from 'spark-react/button';
import Icon from 'spark-react/icon';
import { NOTIFICATION_ID, NOTIFICATION_TYPES } from './notifications-constants';

import './notifications-component.scss';

const Notifications = ({ className, notifications, deleteNotification }) => {
    if (isEmpty(notifications)) {
        return null;
    }

    const _getTitle = (notification) => {
        const title = get(notification, 'title');
        const titleParams = get(notification, 'titleParams', {});

        if (title) {
            return I18n.t(title, titleParams);
        }

        const errorCode = get(notification, 'errorCode');

        if (errorCode) {
            return I18n.t('errors.' + errorCode);
        }

        return '';
    };

    const _getText = (notification) => {
        const text = get(notification, 'text');
        const textParams = get(notification, 'textParams', {});

        if (!text) {
            return '';
        }

        return I18n.t(text, textParams);
    };

    const componentClass = classNames('notifications-wrapper', className);
    const orderedErrors = orderBy(notifications, NOTIFICATION_ID, 'desc');

    return (
        <div className={componentClass}>
            {map(orderedErrors, (notification, index) => {
                const id = get(notification, NOTIFICATION_ID);
                const type = get(notification, 'type', NOTIFICATION_TYPES.SUCCESS);
                const title = _getTitle(notification);
                const text = _getText(notification);

                return (
                    <div className="global-notification" key={id}>
                        <Message className="global-notification-message"
                                 title={title}
                                 text={text}
                                 type={type} />

                        <Button className="global-notification-btn-clear" onClick={() => deleteNotification(id)}>
                            <Icon name="close" />
                        </Button>
                    </div>
                );
            })}
        </div>
    );
};

Notifications.propTypes = {
    className: PropTypes.string,
    notifications: PropTypes.array,

    deleteNotification: PropTypes.func,
};

export default Notifications;
