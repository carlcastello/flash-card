import { createSelector } from "reselect";
import { webDataSelector } from "../selectors";
import { IWebData } from "../../types";

export const isFullPageLoading = createSelector(
  webDataSelector,
  (webData: IWebData) => 
    Object.values(webData.componentLoading).includes(true)
)