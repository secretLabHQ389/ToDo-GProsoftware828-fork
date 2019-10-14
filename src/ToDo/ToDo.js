import React, { Component } from 'react';

export class ToDo extends Component {
  render() {
    return (
      <div>
        <p onClick={this.props.click}>
          Here is a place for {this.props.results}
        </p>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default ToDo;
