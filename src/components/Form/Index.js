import React from "react";
import PropsTypes from 'prop-types';
import {FaPlus} from 'react-icons/fa';
import './Form.css';

export default function Form({handleChange, handleSubmit, novaTarefa}) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input onChange={handleChange} type="text" value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}
Form.propTypes = {
  handleChange: PropsTypes.func.isRequired,
  handleSubmit: PropsTypes.func.isRequired,
  novaTarefa: PropsTypes.string.isRequired,
}