export const PLAY = 'video/play';
export const PAUSE = 'video/pause';
export const STOP = 'video/stop';

const initialState = {
  paused: true
}

export const videoActionsReducer = (state = initialState, action) => {
  if (action.type === PLAY) {
    return {
      ...state,
      paused: false
    }
  }

  if (action.type === PAUSE) {
    return {
      ...state,
      paused: true
    }
  }

  return state;
}