import React, { useState, useContext, useEffect } from 'react';
import ButtonContext from '../../context/button/buttonContext';

export const Settings = () => {
  const buttonContext = useContext(ButtonContext);

  const { setWidth } = buttonContext;

  const [button, setButton] = useState({
    width: 0,
    height: 0,
    x_padding: 0,
    y_padding: 0,
    text: '',
    background_color: '',
    text_color: ''
  });

  const {
    width,
    height,
    x_padding,
    y_padding,
    text,
    background_color,
    text_color
  } = button;

  const onChange = e =>
    setButton({
      ...button,
      [e.target.name]: e.target.value
    });

  return (
    <div>
      <input
        type='number'
        name='width'
        value={width}
        placeholder='12'
        onChange={onChange}
      />
    </div>
  );
};

export default Settings;
