import React, { Component, ReactNode } from 'react';

// import Quiz from './quiz';
// import { QuestionType } from './quiz/components/flash-card/components/question-card/types';
import { Box } from '@material-ui/core';

import Navbar from '../components/navbar';
import Dashboard from './dashboard';


class Page extends Component {
  // renderQuiz(): ReactNode {
  //   return(
  //     <Quiz flashCards={[
  //       {
  //         question: 'What is the capital of Sri Lanka?',
  //         hint: 'India',
  //         questionType: QuestionType.QUESTIONAIRE,
  //         answer: 'potato'
  //       },
  //       {
  //         question: 'Querer',
  //         subQuestion: 'v. irregular',
  //         questionType: QuestionType.WORD,
  //         answer: 'potato'
  //       },
  //       {
  //         question: 'Querer',
  //         subQuestion: 'v. irregular',
  //         questionType: QuestionType.WORD,
  //         answer: 'potato'
  //       }
  //     ]}/>
  //   );
  // }

  render(): ReactNode {
    return(
      <Box>
        <Navbar/>
        <Dashboard/>
      </Box>
    );
  }
}

export default Page; 