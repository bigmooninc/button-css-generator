import {
  SET_WIDTH,
  SET_HEIGHT,
  SET_X_PADDING,
  SET_Y_PADDING,
  SET_TEXT,
  SET_BACKGROUND_COLOR,
  SET_TEXT_COLOR
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_WIDTH:
      return {
        ...state,
        width: action.payload
      };

    case SET_HEIGHT:
      return {
        ...state,
        height: action.payload
      };

    case SET_X_PADDING:
      return {
        ...state,
        x_padding: action.payload
      };

    case SET_Y_PADDING:
      return {
        ...state,
        y_padding: action.payload
      };

    case SET_TEXT:
      return {
        ...state,
        text: action.payload
      };

    case SET_BACKGROUND_COLOR:
      return {
        ...state,
        background_color: action.payload
      };

    case SET_TEXT_COLOR:
      return {
        ...state,
        text_color: action.payload
      };

    default:
      return state;
  }
};
