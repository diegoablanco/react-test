import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { i18nReducer } from 'react-redux-i18n';
<% _.each(reducers, function(reducer) { %>
import <%=reducer.name%> from '<%=reducer.path%>';<%})%>

export const reducers = combineReducers({
    routing: routerReducer,
    i18n: i18nReducer,<% _.each(reducers, function(reducer, index) { %>
    <%=reducer.name%>,<%})%>
});
