import { FETCH_PAGE_DATA } from "../actions";
import { MOCK_FETCH_CREATED_QUIZES } from "../../../../mocks/server_actions";
import { setComponentLoading } from "../../common/actions";
import { DASHBOARD } from "../../common/constants";


export const fetchCreatedQuizes = () => {
  const  setLoadingFunction = setComponentLoading(DASHBOARD);

  return (dispatch: any) => {
    dispatch(setLoadingFunction(true));
    return MOCK_FETCH_CREATED_QUIZES.then((value) => {
      dispatch({type: FETCH_PAGE_DATA, payload: value});
      dispatch(setLoadingFunction(false));
    })
  }
}