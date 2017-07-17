import { connect } from 'react-redux';
import { select } from './<%=fileName%>-selector';
import <%=name%>Container from './<%=fileName%>-container';

export default connect(select)(<%=name%>Container);
