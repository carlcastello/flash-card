import React from "react";
import { shallow } from "enzyme";

import { Quiz } from "../index";
import toJson from "enzyme-to-json";
import { Redirect } from "react-router-dom";
import LoadingScreen from "../../../../../commons/components/loading-screen";
import { Grid } from "@material-ui/core";

describe("Quiz", () => {
  let id: string = "hello-world";
  
  let fetchQuizFunction: any;
  let createQuizSummaryFunction: any;
  let saveQuizSummaryFunction: any;
  let createQuestionFunction: any;
  let saveQuestionFunction: any;
  let deleteQuestionFunction: any;

  let wrapper: any;

  beforeEach(() => {

    fetchQuizFunction = jest.fn();
    createQuizSummaryFunction = jest.fn();
    saveQuizSummaryFunction = jest.fn();
    createQuestionFunction = jest.fn();
    saveQuestionFunction = jest.fn();
    deleteQuestionFunction = jest.fn();

    wrapper = shallow(
      <Quiz
        isFullPageLoading={false}
        creatingQuizSummary={false}
        savingQuizSummary={false}
        isCreatingQuestion={false}
        isSavingQuestion={false}
        isDeletingQuestion={false}
      
        requiredData={[]}
        quiz={{
          id,
          quizSummary: {
            title: "This is the title",
            description: "Description"
          },
          quizQuestions: [{
            id: "question-id",
            question: "this is a question",
            subQuestion: "this is sub question",
            answer: "string",
          }]
        }}   
        fetchQuiz={fetchQuizFunction}
        createQuizSummary={createQuizSummaryFunction}
        saveQuizSummary={saveQuizSummaryFunction}
        createQuestion={createQuestionFunction}
        saveQuestion={saveQuestionFunction}
        deleteQuestion={deleteQuestionFunction}    
        classes={{
          gridContainer: "grid-container",
        }}
        history={{ push: jest.fn() } as any}
        location={{} as any}
        match={{
          params: {
            quizId: id
          }
        } as any}
      />
    )
  });

  describe("The Render Function", () => {
    it("renders the redirect", () => {
      wrapper.setProps({ quiz: { id }, match: { params: {} } });
      expect(toJson(wrapper)).toMatchSnapshot();

      expect(wrapper.find(Redirect).props().to)
        .toEqual("/dashboard/quiz/hello-world");
    });

    it("renders the loading page when page is loading", () => {
      wrapper.setProps({ 
        isFullPageLoading: true,
      });
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(LoadingScreen)).toHaveLength(1);
      expect(wrapper.find(Grid)).toHaveLength(0);
    });

    it("renders the loading page when creatingQuizSummary", () => {
      wrapper.setProps({ 
        creatingQuizSummary: true,
      });
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(LoadingScreen)).toHaveLength(1);
      expect(wrapper.find(Grid)).toHaveLength(0);
    });

    it("renders just the quizSummary questionaire", () => {
      wrapper.setProps({
         quiz: {},
         match: { params: { quizId: null} }
      });
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(Grid)).toHaveLength(2);
    });

    it("renders the full quiz", () => {
      wrapper.setProps({
         quiz: { id },
         match: { params: { quizId: id} }
      });
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(Grid)).toHaveLength(3);
    });
  });
});