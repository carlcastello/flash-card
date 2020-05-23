import { MOCK_QUIZES } from './server_data';
import { IQuiz, IQuizSummary } from '../apps/commons/types';


export const MOCK_FETCH_CREATED_QUIZES = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      createdQuizes: MOCK_QUIZES.map(({ id, quizSummary }: IQuiz) => ({ id, quizSummary }))
    })
  }, 500);
});


export const MOCK_FETCH_QUIZ = (quizId: string) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(MOCK_QUIZES
      .filter(({ id }: IQuiz) =>
        id === quizId)
      [0]
    )
  }, 500)
});


function create_UUID(){
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r :(r&0x3|0x8)).toString(16); // eslint-disable-line
  });
  return uuid;
}

export const MOCK_CREATE_QUIZ = (quizSummary: IQuizSummary) => new Promise((resolve) => {
  setTimeout(() => {
    const newQuiz = { id: create_UUID(), quizSummary, quizQuestions: { flashcards: []} };
    MOCK_QUIZES.push(newQuiz);
    resolve(newQuiz);
  }, 800);
})

export const MOCK_SAVE_QUIZ_SUMMARY = (quizId: string, quizSummary: IQuizSummary) => new Promise((resolve) => {
  setTimeout(() => {
    // MOCK_QUIZES
    //   .filter(({ id }: IQuiz) => id === quizId)
    //   .map  
  }, 800);
});