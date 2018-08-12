import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { REHYDRATE } from 'redux-persist/constants';

import type { exampleType } from '../../common/types/example'

const GET_EXAMPLE = 'app/example/GET_EXAMPLE';
const UPDATE_EXAMPLE = 'app/example/UPDATE_EXAMPLE';

export const constants = {
  GET_EXAMPLE,
  UPDATE_EXAMPLE,
};

// ------------------------------------
// Actions
// ------------------------------------
export const getAwesomeCode = createAction(GET_EXAMPLE, () => ({}));
export const updateExample = createAction(UPDATE_EXAMPLE, (result : exampleType) => ({ result }));

export const actions = {
  getAwesomeCode,
  updateExample,
};

export const reducers = {
  [REHYDRATE]: (state, { payload }) => {
    console.log(state, payload); return state.merge(payload.example)
  },
  [UPDATE_EXAMPLE]: (state, { payload }) =>
    state.merge({
      ...payload,
    }),
}

export const initialState = () =>
  Map({
    result: '',
  })

export default handleActions(reducers, initialState());
