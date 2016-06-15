import React from 'react';
import EmailValidator from 'email-validator';

class EmailField extends React.Component {

	constructor() {
		super();
		this.state = {
			valid: true,
			value: ""
		};
		this.onChange = this.onChange.bind(this);
	}
	clearField() {
		this.setState({value: ""});
	};
	onChange(element) {
		var val = element.target.value;
		if (!EmailValidator.validate(val)) {
			this.setState({valid: false, value: val})
		} else {
			this.setState({valid: true, value: val})
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
