import { createReducer, on } from '@ngrx/store';
import { AppInitialSate } from '../AppInitialState';
import { LoginState } from './LoginState';
import {
    recoverPassword,
    recoverPasswordFail,
    recoverPasswordSuccess,
} from './login.actions';

const initialSate: LoginState = AppInitialSate.login;

const reducer = createReducer(
  initialSate,
  on(recoverPassword, (currentState) => {
    return {
      ...currentState,
      error: null,
      isRecoveredPassword: false,
      isRecoveringPassword: true,
    };
  }),
  on(recoverPasswordSuccess, (currentState) => {
    return {
      ...currentState,
      error: null,
      isRecoveredPassword: true,
      isRecoveringPassword: false,
    };
  }),
  on(recoverPasswordFail, (currentState, action) => {
    return {
      ...currentState,
      error: action.error,
      isRecoveredPassword: false,
      isRecoveringPassword: false,
    };
  })
);

export function loginReducer(state: LoginState, action: any) {
  return reducer(state, action);
}
