import { IReduxState } from "../types";

export const webDataSelector = (state: IReduxState) => 
  state.web;