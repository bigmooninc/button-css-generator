import React, { useState, useContext } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export const Settings = () => {
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
    width
    // height,
    // x_padding,
    // y_padding,
    // text,
    // background_color,
    // text_color
  } = button;

  // const onChange = e =>
  //   setButton({
  //     ...button,
  //     [e.target.name]: e.target.value
  //   });

  const onSliderChange = width => {
    setButton({
      width
    });
    console.log('Width: ' + width + 'px');
  };

  return (
    <div>
      <Slider min={0} max={30} onChange={onSliderChange} />
      <p>{width}px</p>
    </div>
  );
};

export default Settings;
