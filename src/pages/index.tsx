import React, { Component, ReactNode } from 'react';

import Quiz from './quiz';
import { QuestionType } from './quiz/components/flash-card/components/question-card/types';

class Page extends Component {
  render(): ReactNode {
    return(
      <Quiz flashCards={[
        {
          question: 'What is the capital of Sri Lanka?',
          hint: 'India',
          questionType: QuestionType.QUESTIONAIRE,
          answer: 'potato'
        },
        {
          question: 'Querer',
          subQuestion: 'v. irregular',
          questionType: QuestionType.WORD,
          answer: 'potato'
        }
      ]}/>
    );
  }
}

export default Page;