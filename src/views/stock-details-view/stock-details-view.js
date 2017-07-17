import React, { Component } from 'react';
import FullPage from '../../layouts/full-page';
import StockDetails from '../../components/stock-details';

class StockDetailsView extends Component {

    render() {
        return (
            <FullPage className="stock-details-view">
                <StockDetails {...this.props} />
            </FullPage>
        );
    }
}

export default StockDetailsView;
