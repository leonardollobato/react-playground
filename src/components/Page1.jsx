import React from 'react';
import HTTP from '../service/httpservice'

class Page1 extends React.Component {
	constructor() {
		super();

		this.state = {
			ingredients: []
		}

		//this.componentWillMount = this.componentWillMount.bind(this);

	};

	componentWillMount() {
		HTTP.get('/ingredients').then(function (data) {
			this.setState({ingredients: data});
		}.bind(this));
	};

	render() {
		var listItems = this.state.ingredients.map(function (item) {
			return <li key={item.id}>{item.text}</li>;
		})
		return (
			<ul>{listItems}</ul>
		)
	}
}

export default Page1;
