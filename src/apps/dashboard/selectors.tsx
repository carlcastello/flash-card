import { IReduxState } from "../types";


export const dashboardAppSelector = (state: IReduxState) =>
  state.dashboardApp;
