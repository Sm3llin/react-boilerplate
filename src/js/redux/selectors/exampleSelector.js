import { createSelector } from 'reselect';

const exampleDataSelector = state => state.example;

const resultSelector = createSelector(
  exampleDataSelector,
  payload => payload.get('result')
);

const motdSelector = createSelector(
  exampleDataSelector,
  payload => payload.get('motd')
);

export const exampleSelector = state => ({
  result: resultSelector(state),
  motd: motdSelector(state),
});
