import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Completed.css';
import Xfinished from '../assets/graphics/Xfinished.png';

export class Completed extends Component {
  render() {
    return (
      <div
        className="Completed"
        onClick={this.props.click}
        data-test="CompletedComponent"
      >
        <p data-test="titles">
          <img
            data-test="clicker"
            src={Xfinished}
            alt="completed_X_mark"
            height="32"
            width="32"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          {this.props.title}
        </p>
        <hr />
      </div>
    );
  }
}

Completed.propTypes = {
  title: PropTypes.string
};

export default Completed;
