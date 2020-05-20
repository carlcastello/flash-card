import { IReduxState } from "../types";

export const webDataSelector = (state: IReduxState) => {
  console.log(state.web)
  return state.web;
}