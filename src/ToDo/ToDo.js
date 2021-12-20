import React from 'react';
import PropTypes from 'prop-types';
import './ToDo.css';
import checkmark from '../assets/graphics/checkmark.png';

export const ToDo = React.memo((props) => {
  const {click, title} = props
  return (
    <div
      className="ToDo"
      onClick={click}
      data-test="TodoComponent"
    >
      <p data-test="titles">
        <img
          data-test="clicker"
          src={checkmark}
          alt="checkmark"
          height="32"
          width="32"
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        {title}
      </p>
      <hr />
    </div>
  )
})

ToDo.propTypes = {
  click: PropTypes.any,
  title: PropTypes.string
}
