import { IField } from "../../components/form/types";

export const QuizSummaryFields: IField[] = [
  {
    id: 'quiz-title',
    label: 'Title',
    type: 'text',
    required: true,
    validator: (value: string) => {
      if (!value) {
        return 'Quiz title is Required.'
      } else if (!/[0-9a-zA-Z\- ]+/.test(value)) {
        return 'Quiz title is invalid.'
      }
      return false; // Form is Valid: Returns No Error Message
    }
  },
  {
    id: 'quiz-description',
    label: 'Description',
    type: 'text',
    validator: (value: string) => {
      if (!/[a-zA-Z\- ]+/.test(value)) {
        return 'Last Name is invalid.'
      }
      return false; // Form is Valid: Returns No Error Message
    }
  },
]

export const QuestionFields: IField[] = [
  {
    id: 'question',
    label: 'Question',
    type: 'text',
    required: true,
    validator: (value: string) => {
      if (!value) {
        return 'Quiz title is Required.'
      } else if (!/[0-9a-zA-Z\- ]+/.test(value)) {
        return 'Quiz title is invalid.'
      }
      return false; // Form is Valid: Returns No Error Message
    }
  },
  {
    id: 'sub-question',
    label: 'Sub Question',
    type: 'text',
    required: false,
    validator: (value: string) => {
      if (!value) {
        return 'Quiz title is Required.'
      } else if (!/[0-9a-zA-Z\- ]+/.test(value)) {
        return 'Quiz title is invalid.'
      }
      return false; // Form is Valid: Returns No Error Message
    },
  },
  {
    id: 'hint',
    label: 'Hint',
    type: 'text',
    required: false,
    validator: (value: string) => {
      if (!value) {
        return 'Quiz title is Required.'
      } else if (!/[0-9a-zA-Z\- ]+/.test(value)) {
        return 'Quiz title is invalid.'
      }
      return false; // Form is Valid: Returns No Error Message
    },
  },
  {
    id: 'answer',
    label: 'Answer',
    type: 'text',
    required: false,
    validator: (value: string) => {
      if (!value) {
        return 'Quiz title is Required.'
      } else if (!/[0-9a-zA-Z\- ]+/.test(value)) {
        return 'Quiz title is invalid.'
      }
      return false; // Form is Valid: Returns No Error Message
    },
  }
];