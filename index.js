import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './src/components/app';
import Signin from './src/components/auth/signin';
import Signout from './src/components/auth/signout';
import Signup from './src/components/auth/signup';
import NewItem from './src/components/list/new-list-time';
import ListItems from './src/components/list/list-items';
import ListShow from './srccomponents/list/list-show';
import UpdateList from './src/components/list/update-list-item';
import RequireAuth from './src/components/auth/require_auth';
import reducers from './src/reducers';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={browserHistory}>
			<Route path='/' component={App}>
					<Route path='signin' component={Signin} />
					<Route path='signout' component={Signout} />
					<Route path='signup' component={Signup} />
					<Route path='newitem' component={RequireAuth(NewItem)} />
					<Route path='items' component={RequireAuth(ListItems)} />
					<Route path='items/:id' component={RequireAuth(ListShow)} />
					<Route path='updateitem/:id' component={RequireAuth(UpdateList)} />
			</Route>
		</Router>
	</Provider>
	, document.querySelector('.container'));