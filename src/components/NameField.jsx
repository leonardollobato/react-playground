import React from 'react';

class NameField extends React.Component {
	constructor() {
		super();
		this.state = {
			value: ""
		}
		this.onChange = this.onChange.bind(this);
	};
	clearField() {
		this.setState({value: ""});
	};
	onChange(element) {
		this.setState({value: element.target.value})
	};
	render() {
		return (
			<div className="form-group">
				<input className="form-control" value={this.state.value} onChange={this.onChange} placeholder={this.props.type + " Name"}/>
			</div>
		);
	}
};

export default NameField;
