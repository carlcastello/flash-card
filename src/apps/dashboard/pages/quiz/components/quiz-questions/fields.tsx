import { IField } from "../../../../components/form/types";
import { IQuestionBase } from "../../../../../commons/types";


export const QuestionFields = (questionBase: IQuestionBase): IField[] => ([
  {
    id: 'question',
    label: 'Question',
    type: 'text',
    required: true,
    value: questionBase.question,
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
    value: questionBase.subQuestion,
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
    value: questionBase.hint,
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
    required: true,
    value: questionBase.answer,
    validator: (value: string) => {
      if (!value) {
        return 'Quiz title is Required.'
      } else if (!/[0-9a-zA-Z\- ]+/.test(value)) {
        return 'Quiz title is invalid.'
      }
      return false; // Form is Valid: Returns No Error Message
    },
  }
]);