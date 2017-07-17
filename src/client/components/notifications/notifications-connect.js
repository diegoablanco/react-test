import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { select } from './notifications-selector';
import Container from './notifications-container';
import { deleteNotification } from './notifications-actions';

const mapDispatchToProps = (dispatch) => {
    const actions = bindActionCreators({
        deleteNotification,
    }, dispatch);

    return {actions};
};

export default connect(select, mapDispatchToProps)(Container);
