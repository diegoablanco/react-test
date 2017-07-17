import { connect } from 'react-redux';
import { select } from './stock-list-selector';
import StockListContainer from './stock-list-container';

export default connect(select)(StockListContainer);
