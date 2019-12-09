import React, { useReducer } from 'react';
import ButtonContext from './buttonContext';
import ButtonReducer from './buttonReducer';

import {
  SET_WIDTH,
  SET_HEIGHT,
  SET_X_PADDING,
  SET_Y_PADDING,
  SET_TEXT,
  SET_BACKGROUND_COLOR,
  SET_TEXT_COLOR
} from '../types';

const ButtonState = props => {
  const initialState = {
    width: null,
    height: null,
    x_padding: 0,
    y_padding: 0,
    text: 'Button Text',
    background_color: '#dddddd',
    text_color: '#ffffff'
  };

  const [state, dispatch] = useReducer(ButtonReducer, initialState);

  const setWidth = () => {
    dispatch({
      type: SET_WIDTH,
      payload: state
    });
  };

  return (
    <ButtonContext.Provider
      value={{
        width: state.width,
        height: state.height,
        x_padding: state.x_padding,
        y_padding: state.y_padding,
        text: state.text,
        background_color: state.background_color,
        text_color: state.text_color,
        setWidth
      }}
    >
      {props.children}
    </ButtonContext.Provider>
  );
};

export default ButtonState;
