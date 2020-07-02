import { MOCK_QUIZES } from './mock_data';
import { IQuiz, IQuestionBase, IQuestion, IQuizSummary } from '../../apps/commons/types';


function create_UUID(){
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r :(r&0x3|0x8)).toString(16); // eslint-disable-line
  });
  return uuid;
}

export default {
  CREATE_QUIZ: (quizSummary: IQuizSummary) => new Promise((resolve) => {
    setTimeout(() => {
      const newQuiz = { id: create_UUID(), quizSummary, quizQuestions: [] };
      MOCK_QUIZES.push(newQuiz);
      resolve(newQuiz);
    }, 800);
  }),

  DELETE_QUIZ: (quizId: string) => new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        createdQuizes: MOCK_QUIZES.filter(({ id }: IQuiz) => id !== quizId)
      });
    }, 1000)
  }),

  SAVE_QUIZ_SUMMARY: (quizId: string, quizSummary: IQuizSummary) => new Promise((resolve) => {
    setTimeout(() => {
      const hello = MOCK_QUIZES
          .filter(({ id }: IQuiz) => id === quizId)
          .map((quiz) => ({...quiz, quizSummary}))[0]
      resolve(hello);
    }, 800);
  }),

  CREATE_QUESTION: (quizId: string, question: IQuestionBase) => new Promise((resolve) => {
    setTimeout(() => {
      const quiz: IQuiz = MOCK_QUIZES
        .filter(({ id }: IQuiz) => id === quizId)
        .map(({ id, quizSummary, quizQuestions }: IQuiz) => ({
          id, quizSummary, quizQuestions: [...quizQuestions, {id: create_UUID(), ...question }] 
        }))
        [0]
      resolve(quiz);
    }, 800);
  }),

  SAVE_QUESTION: (quizId: string, questionId: string, question: IQuestionBase) => new Promise((resolve) => {
    setTimeout(() => {
      const quiz: IQuiz = MOCK_QUIZES
      .filter(({ id }: IQuiz) => id === quizId)
      .map(({ id, quizSummary, quizQuestions }: IQuiz) => {
        const newQuestions = quizQuestions.map((quizQuestion: IQuestion) => quizQuestion.id === questionId ? {...quizQuestion, ...question } : quizQuestion);
        return ({
          id,
          quizSummary,
          quizQuestions: newQuestions
        })
      })
      [0]
  
      resolve(quiz);
    }, 800);
  }),

  DELETE_QUESTION: (quizId: string, questionId: string) => new Promise((resolve) => {
    setTimeout(() => {
      const quiz: IQuiz = MOCK_QUIZES
      .filter(({ id }: IQuiz) => id === quizId)
      .map(({ id, quizSummary, quizQuestions }: IQuiz) => {
        const newQuestions = quizQuestions.filter((quizQuestion: IQuestion) => quizQuestion.id !== questionId);
        return ({
          id,
          quizSummary,
          quizQuestions: newQuestions
        })
      })
      [0]
      resolve(quiz);
    }, 1000)
  }),  
}