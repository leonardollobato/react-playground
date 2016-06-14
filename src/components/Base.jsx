import React from 'react';

class Base extends React.Component{
  render(){
    return (
      <div>
        <h1>Header</h1>
        {this.props.children}
        <h1>Footer</h1>
      </div>
    )
  }
}

export default Base;
