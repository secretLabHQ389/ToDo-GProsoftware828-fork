import React from 'react';
import PropTypes from 'prop-types';
import './Completed.css';
import Xfinished from '../assets/graphics/Xfinished.png';

export const Completed = React.memo((props) => {
  const {click, title} = props
  return (
    <div
      className="Completed"
      onClick={click}
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
        {title}
      </p>
      <hr />
    </div>
  )
})

Completed.propTypes = {
  click: PropTypes.string,
  title: PropTypes.string
};
