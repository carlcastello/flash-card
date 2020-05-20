import { FETCH_PAGE_DATA } from "../actions";
import { MOCK_FETCH_CREATED_QUIZES } from "../../../../mocks/server_actions";


export const fetchCreatedQuizes = () => {
  return (dispatch: any) => {
    return MOCK_FETCH_CREATED_QUIZES.then((value) => {
      dispatch({type: FETCH_PAGE_DATA, payload: value})
    })
  }
}