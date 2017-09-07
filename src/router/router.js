//router.js
import React,{ Component } from 'react';
import {
	BrowserRouter as Router,
	Link,
	Route
} from 'react-router-dom';
import createBrowserHistory from 'history';
import Login from '../pages/Login/login';
import Home from '../pages/Home/home';
import Trade from '../pages/trade_Account/trade_Account';
import Select from '../pages/date_Select/date_Select';
import Income from '../pages/income_Detail/income_Detail';
import Billing from '../pages/billing_Report/billing_Report';
import Report from '../pages/report_Detail/report_Detail';
import Inform from '../pages/news_Inform/news_Inform';
import News from '../pages/news_Detail/news_Detail';

const history = createBrowserHistory;
export default class RouterMap extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<Router history={ history } >
				<div>
					<Router exact path="/login" component={ Login } />
					<Router exact path="/home" component={ Home } />
					<Router exact path="/trade_Account" component={ Trade } />
					<Router exact path="/date_Select" component={ Select } />
					<Router exact path="/billing_Report" component={ Billing } />
					<Router exact path="/income_Detail" component={ Income } />
					<Router exact path="/report_Detail" component={ Report } />
					<Router exact path="/news_Infrom" component={ Inform } />
					<Router exact path="/news_Detail" component={ News } />
				</div>
			</Router>
		)
	}
}
