import { createSelector } from 'reselect';
import { moduleDataSelector } from '../selectors';
import { IModuleState } from '../../types';

export const pageDataSelector = createSelector(
  moduleDataSelector,
  (moduleData: IModuleState) => {
    console.log(moduleData)
    return moduleData.pageData;
  }
)
