import { connect } from 'react-redux';
import { select } from './private-route-selector';
import PrivateRouteContainer from './private-route-container';

export default connect(select)(PrivateRouteContainer);
