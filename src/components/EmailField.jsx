import React from 'react';
import EmailValidator from 'email-validator';

class EmailField extends React.Component {
	constructor() {
		super();
		this.state = {
			valid: false,
			value: ""
		};
	}

	onChange(element) {
		//var val = element.target.value;
		if (!EmailValidator.validate(element.target.value)) {
			this.setState({valid: false, value: element.target.value})
		} else {
			this.setState({valid: true, value: element.target.value})
		}
	};

	render() {
		var formClass = this.state.valid
			? "form-group"
			: "form-group has-error";

		return (
			<div className={formClass}>
				<input className="form-control" value={this.state.value} onChange={this.onChange} placeholder="Email"/>
			</div>
		);
	};
}

export default EmailField;
