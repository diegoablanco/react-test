import React from 'react';
import FullPage from '../../layouts/full-page';
import StockDetails from '../../components/stock-details';

const StockAddView = () => {
    return (
        <FullPage className="stock-add-view">
            <StockDetails />
        </FullPage>
    );
};

export default StockAddView;
