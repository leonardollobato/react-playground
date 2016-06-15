import React from 'react';
import NameField from './NameField.jsx';
import EmailField from './EmailField.jsx';

class LeadCapture extends React.Component {
	constructor() {
		super();
		this.onSubmit = this.onSubmit.bind(this);
	};
	onSubmit(element) {

		console.log(element);
		if (!this.refs.fieldEmail.state.valid) {
			alert("You suck at filling out forms. Email is always required in a lead capture form. Dummy!");
		} else {
			var httpRequestBody = {
				email: this.refs.fieldEmail.state.value,
				firstName: this.refs.fieldName.state.value
			};
			console.log(httpRequestBody);

			this.refs.fieldEmail.clearField();
			this.refs.fieldName.clearField();
		}
	};
	render() {
		return (
			<div className="col-sm-3">
				<div className="panel panel-default">
					<div className="panel-body">
						<NameField type="Full" ref="fieldName"/>
						<EmailField ref="fieldEmail"/>
						<button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
					</div>
				</div>
			</div>
		)
	}
}

export default LeadCapture;
