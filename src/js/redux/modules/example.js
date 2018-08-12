import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { REHYDRATE } from 'redux-persist/constants';

import type { exampleType } from '../../common/types/example'

const GET_EXAMPLE = 'app/example/GET_EXAMPLE';
const UPDATE_EXAMPLE = 'app/example/UPDATE_EXAMPLE';
const UPDATE_MOTD = 'app/example/UPDATE_MOTD';

export const constants = {
  GET_EXAMPLE,
  UPDATE_EXAMPLE,
  UPDATE_MOTD,
};

// ------------------------------------
// Actions
// ------------------------------------
export const getAwesomeCode = createAction(GET_EXAMPLE, () => ({}));
export const updateExample = createAction(UPDATE_EXAMPLE, (result : exampleType) => ({ result }));
export const updateMotd = createAction(UPDATE_MOTD, (value) => ({ value }));

export const actions = {
  getAwesomeCode,
  updateExample,
  updateMotd,
};

export const reducers = {
  [REHYDRATE]: (state, { payload }) => {
    console.log(state, payload); return state.merge(payload.example)
  },
  [UPDATE_EXAMPLE]: (state, { payload }) =>
    state.merge({
      ...payload,
    }),
  [UPDATE_MOTD]: (state, { payload }) => state.merge({ motd: payload.value }),
};

export const initialState = () =>
  Map({
    result: '',
    motd: '',
  })

export default handleActions(reducers, initialState());
