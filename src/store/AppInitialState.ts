import { AppState } from './AppState';

export const AppInitialSate: AppState = {
  loading: {
    show: false,
  },
  login: {
    error: null,
    isLoggedIn: false,
    isLogginIn: false,
    isRecoveredPassword: false,
    isRecoveringPassword: false
  },
};
