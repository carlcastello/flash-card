import { IReduxState } from "../types";


export const webDataSelector = (state: IReduxState) => {
  return state.web;
}
