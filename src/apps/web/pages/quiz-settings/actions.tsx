import { FETCH_PAGE_DATA } from "../actions";

const MOCK_SERVER_DATA: { [key: string]: Object; }  = {
  '489ebf1e-91b3-4cfb-9f07-3792310ded9d': {
    title: 'Quiz 1',
    description: 'The quick brown fox jumps over the lazy dog.',
    flashCard: []
  },
  'cc85cf81-8abb-4a1d-b308-8baaddcc0d90': {
    title: 'Quiz 2',
    description: 'The quick brown fox jumps over the lazy dog.',
    flashCard: []
  },
  '768a5834-8eac-482c-bc94-1dacbe8a8296': {
    title: 'Quiz 3',
    description: 'The quick brown fox jumps over the lazy dog.',
    flashCard: []
  },
  '7f1970d6-d0cf-4d43-af2f-acffd556239e': {
    title: 'Quiz 4',
    description: 'The quick brown fox jumps over the lazy dog.',
    flashCard: []
  },
  'a7bc1567-159c-41e7-8810-6e334e884e21': {
    title: 'Quiz 5',
    description: 'The quick brown fox jumps over the lazy dog.',
    flashCard: []
  }
}

const MOCK_FETCH_QUIZ = (quizId: string) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(MOCK_SERVER_DATA[quizId])
  }, 500)
});


export const fetchQuiz = (quizId: string) => {
  return (dispatch: any) => {
    return MOCK_FETCH_QUIZ(quizId).then((payload) => {
      dispatch({ type: FETCH_PAGE_DATA, payload })
    })
  };
}

export const saveQuizSummary = () => {

}

export const saveCreatedQuestion = () => {

}

