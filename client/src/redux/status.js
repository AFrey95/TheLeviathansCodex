import { createReduxModule } from "hooks-for-redux";

export const requestStatus = {
  OK: Symbol("OK"),
  PENDING: Symbol("PENDING"),
  ERROR: Symbol("ERROR"),
};

const initialState = {
  lastRequestCode: null,
  requestStatus: requestStatus.OK,
  error: null,
};

export const [useStatus, { setStatus, setLastRequestCode, setRequestStatus, setError }, statusStore] =
  createReduxModule("status", initialState, {
    setStatus: (state, newState) => newState,
    setLastRequestCode: (state, lastRequestCode) => Object.assign({}, state, { lastRequestCode }),
    setRequestStatus: (state, requestStatus) => Object.assign({}, state, { requestStatus }),
    setError: (state, error) => Object.assign({}, state, { error }),
  });
