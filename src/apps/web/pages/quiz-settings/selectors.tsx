import { createSelector } from "reselect";
import { pageDataSelector } from "../selectors";
import { IPageData } from "../../../types";

export const titleSelector = createSelector(
  pageDataSelector,
  (pageData: IPageData) => pageData.title || ''
);

export const descriptionSelector = createSelector(
  pageDataSelector,
  (pageData: IPageData) => pageData.description || ''
);

export const flashCardsSelector = createSelector(
  pageDataSelector,
  (pageData: IPageData) => pageData.flashCards || []
);