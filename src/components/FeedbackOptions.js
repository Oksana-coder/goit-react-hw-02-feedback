import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div>
        {options.map( option => (
          <button
            type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >{option}</button>
        ))}
    </div>
);

FeedbackOptions.protoTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
