import React from 'react';
import { BrowserRouter as Router, Route as PublicRoute, Switch } from 'react-router-dom';
import Route from './components/private-route';
import NotFoundComponent from './components/not-found';

import LoginView from './views/login-view';
import StockListView from './views/stock-list-view';
import {createBrowserHistory} from 'history'

const router = (
        <Switch>
            <Route exact path='/' component={StockListView} />
            <Route path="/stock" component={StockListView} />
            <PublicRoute path="/login" component={LoginView} />
            <Route path="*" component={NotFoundComponent} />
        </Switch>
);

export { router };