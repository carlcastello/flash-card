import { IReduxState } from '../types';

export const moduleDataSelector = (state: IReduxState) => {
  console.log(state);
  return state.module;
}