import { connect } from 'react-redux';
import { select } from './stock-details-selector';
import StockDetailsContainer from './stock-details-container';

export default connect(select)(StockDetailsContainer);
