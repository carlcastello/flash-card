import { IQuiz } from "../../apps/commons/types";


export const MOCK_QUIZES: IQuiz[] = [
  {
    id: '489ebf1e-91b3-4cfb-9f07-3792310ded9d',
    quizSummary: {
      title: 'Quiz 1',
      description: 'The quick ',
    },
    quizQuestions: [{
      answer: 'salad',
      hint: 'potato',
      id: '54e104b1-9b56-461b-8bca-21bd5288180c',
      question: 'hello',
      subQuestion: 'world'
    },
    {
      answer: 'Lazy',
      hint: 'The',
      id: 'b9128862-9149-4ec4-8847-4a68eda4d8a2',
      question: 'Jumps',
      subQuestion: 'Ove',
    },
    {
      answer: 'Potato Salad',
      hint: 'The',
      id: 'b9128862-9149-4ec4-8847-4a68eda4d8a2',
      question: 'What is the capital city of Potato Head?',
      subQuestion: 'hello  world',
    },
    {
      answer: 'Lazy',
      hint: 'The',
      id: 'b9128862-9149-4ec4-8847-4a68eda4d8a2',
      question: 'Jumps',
      subQuestion: 'Ove',
    }]
  },
  {
    id: 'cc85cf81-8abb-4a1d-b308-8baaddcc0d90',
    quizSummary: {
      title: 'Quiz 2',
      description: 'The quick over the lazy dog.',
    },
    quizQuestions: []
  },
  {
    id: '768a5834-8eac-482c-bc94-1dacbe8a8296',
    quizSummary: {
      title: 'Quiz 3',
      description: 'The quick brown fox jumps over the lazy dog.',
    },
    quizQuestions: []
  },
  {
    id: '7f1970d6-d0cf-4d43-af2f-acffd556239e',
    quizSummary: {
      title: 'Quiz 4',
      description: 'The quick brown fox jumps over the lazy dog.',
    },
    quizQuestions: []
  },
  {
    id: 'a7bc1567-159c-41e7-8810-6e334e884e21',
    quizSummary: {
      title: 'Quiz 5',
      description: 'The quick brown fox jumps over the lazy dog.',
    },
    quizQuestions: []
  },
] 