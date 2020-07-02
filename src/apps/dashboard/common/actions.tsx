export const SET_COMPONENT_LOADING = 'SET_COMPONENT_LOADING';

export const setComponentLoading = (loadingName: string) => (isLoading: boolean) => ({
  type: SET_COMPONENT_LOADING,
  payload: {[loadingName]: isLoading},
});