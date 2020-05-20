import { FETCH_PAGE_DATA } from "../actions";

const TEST_FETCH_CREATED_QUIZES = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      createdQuizes: [
        {
          title: 'Quiz 1',
          description: 'The quick brown fox jumps over the lazy dog',
          id: '111-111'
        },
        {
          title: 'Quiz 2',
          description: 'The quick brown fox jumps over the lazy dog',
          id: '222-222'
        },
        {
          title: 'Quiz 3',
          description: 'The quick brown fox jumps over the lazy dog',
          id: '333-333'
        },
        {
          title: 'Quiz 4',
          description: 'The quick brown fox jumps over the lazy dog',
          id: '444-444'
        },
        {
          title: 'Quiz 5',
          description: 'The quick brown fox jumps over the lazy dog',
          id: '555-555'
        },
      ]
    })
  }, 500);
});

export const fetchCreatedQuizes = () => {
  return (dispatch: any) => {
    return TEST_FETCH_CREATED_QUIZES.then((value) => {
      dispatch({type: FETCH_PAGE_DATA, payload: value})
    })
  }
}