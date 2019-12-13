import React, { useState, useContext } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Input, Radio } from 'semantic-ui-react';

export const Settings = () => {
  const [button, setButton] = useState({
    width: 200,
    height: 50,
    x_padding: 0,
    y_padding: 0,
    text: '',
    background_color: '',
    text_color: '',
    useWidth: false,
    useHeight: false
  });

  const {
    width,
    height,
    useWidth,
    useHeight
    // x_padding,
    // y_padding,
    // text,
    // background_color,
    // text_color
  } = button;

  const onChange = e => {
    setButton({
      ...button,
      [e.target.name]: e.target.value
    });
  };

  // const onSliderChange = width => {
  //   setButton({
  //     width
  //   });
  //   console.log('Width: ' + width + 'px');
  // };

  return (
    <div>
      <Radio toggle />
      <Input
        type='number'
        placeholder='Button width'
        name='width'
        value={width}
        onChange={onChange}
      />
      <br />
      <Radio toggle />
      <Input
        type='number'
        placeholder='Button height'
        name='height'
        value={height}
        onChange={onChange}
      />
      {/* <Slider min={0} max={30} onChange={onSliderChange} /> */}
      <br />
      <button
        style={{
          width: useWidth ? `${width}px` : 'auto',
          height: useHeight ? `${height}px` : 'auto'
        }}
      >
        Sample
      </button>
    </div>
  );
};

export default Settings;
