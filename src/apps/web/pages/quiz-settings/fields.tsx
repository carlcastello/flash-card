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