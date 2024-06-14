import { createReducer, on } from '@ngrx/store';
import { LoadingState } from './LoadingState';
import { hide, show } from './loading.actions';

const initialState: LoadingState = {
  show: false,
};

const reducer = createReducer(
  initialState,
  on(show, () => {
    return { show: true };
  }),
  on(hide, () => {
    return { show: false };
  })
);

export function loadingReducer(state: LoadingState, action: any) {
  return reducer(state, action);
}
