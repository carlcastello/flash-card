import React from "react";
import { shallow } from "enzyme";

import { QuizQuestion } from "../index";
import { IQuestionCard } from "../../../../../../commons/types";
import toJson from "enzyme-to-json";
import InformationCard from "../../../../../components/information-card";
import Form from "../../../../../components/form";
import WebModal from '../../../../../components/styled-modal';
import { Collapse, Fade, Button, IconButton } from "@material-ui/core";


describe("The Quiz Questions ", () => {

  const id: string = "quiz-question-id";
  const question: IQuestionCard = {
    id: "question-id",
    question: "this is a question",
    subQuestion: "this is a sub question",
    hint: "this is a hint",
    answer: "this is an answer",
  }

  let instance: any;
  let wrapper: any;

  let pushFunction: any;

  let createQuestionFunction: any;
  let saveQuestionFunction: any;
  let deleteQuestionFunction: any;


  beforeEach(() => {

    createQuestionFunction = jest.fn();
    saveQuestionFunction = jest.fn();
    deleteQuestionFunction = jest.fn().mockResolvedValue(null);

    wrapper = shallow(
      <QuizQuestion
        quizId={id}
        quizQuestions={[question]}
        push={pushFunction}
        createQuestion={createQuestionFunction}
        saveQuestion={saveQuestionFunction}
        deleteQuestion={deleteQuestionFunction}
        isCreatingQuestion={false}
        isSavingQuestion={false}
        isDeletingQuestion={false}
        classes={{
          questionContainer: "question-container",
          paperContainer: "paper-container",
          openFormButton: "open-form-button",
          closeButton: "close-button",
        }}/>
    );

    instance = wrapper.instance();
  });


  describe("The render function", () => {
    it("renders the list view view", () => {
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(InformationCard)).toHaveLength(1);
      expect(wrapper.find(Form)).toHaveLength(2);
      expect(wrapper.find(WebModal)).toHaveLength(2);
    });

    it("renders an empty view", () => {
      wrapper.setProps({ quizQuestions: [] });
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(InformationCard)).toHaveLength(0);
      expect(wrapper.find(Form)).toHaveLength(2);
      expect(wrapper.find(WebModal)).toHaveLength(2);
    });
 
    it("shows the create question form", () => {
      expect(wrapper.find(Fade).at(0).props().in).toEqual(false);
      expect(wrapper.find(Fade).at(1).props().in).toEqual(true);
      expect(wrapper.find(Collapse).props().in).toEqual(false);
      expect(toJson(wrapper)).toMatchSnapshot();

      wrapper.setState({ createQuestionFormOpen: true });

      expect(wrapper.find(Fade).at(0).props().in).toEqual(true);
      expect(wrapper.find(Fade).at(1).props().in).toEqual(false);
      expect(wrapper.find(Collapse).props().in).toEqual(true);
      expect(toJson(wrapper)).toMatchSnapshot();
    });


    it("shows isCreatingQuestion", () => {
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(Form).at(0).props().isLoading).toEqual(false);

      wrapper.setProps({ isCreatingQuestion: true });

      expect(wrapper.find(Form).at(0).props().isLoading).toEqual(true);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("shows the editQuestionForm", () => {
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(WebModal).at(0).props().isOpen).toEqual(false);

      wrapper.setState({ editQuestionFormOpen: true});

      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(WebModal).at(0).props().isOpen).toEqual(true);
    });

    it("shows isSavingQuestion", () => {
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(Form).at(1).props().isLoading).toEqual(false);

      wrapper.setProps({ isSavingQuestion: true });

      expect(wrapper.find(Form).at(1).props().isLoading).toEqual(true);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("shows the deleteQuestionFormOpen", () => {
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(WebModal).at(1).props().isOpen).toEqual(false);

      wrapper.setState({ deleteQuestionFormOpen: true});

      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(WebModal).at(1).props().isOpen).toEqual(true);
    });

    it("shows isDeletingQuestion", () => {
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(WebModal).at(1).props().isLoading).toEqual(false);

      wrapper.setProps({ isDeletingQuestion: true });

      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(WebModal).at(1).props().isLoading).toEqual(true);
    });
  });

  describe("The state function", () => {
    it("opens and close the create question form", () => {
      expect(wrapper.state().createQuestionFormOpen).toEqual(false);
      wrapper.find(Button).simulate("click");
      expect(wrapper.state().createQuestionFormOpen).toEqual(true);
      wrapper.find(IconButton).simulate("click");
      expect(wrapper.state().createQuestionFormOpen).toEqual(false);
    });

    it("changes the state with onEditQuestionToggleClick", () => {
      expect(wrapper.state().toggledQuestionId).toEqual("");
      expect(wrapper.state().toggledQuestion).toEqual({
        answer: "",
        hint: "",
        question: "",
        subQuestion: ""
      });

      instance.onEditQuestionToggleClick(question.id);

      expect(wrapper.state().toggledQuestion).toEqual(question);
      expect(wrapper.state().toggledQuestionId).toEqual(question.id);
    });

    it("changes the state with onDeleteQuestionToggleClick", () => {
      expect(wrapper.state().toggledQuestionId).toEqual("");

      instance.onDeleteQuestionToggleClick(question.id);

      expect(wrapper.state().toggledQuestionId).toEqual(question.id);
    });
  });

  describe("The action", () => {
    it("calls createQuestion", () => {
      instance.onCreateQuestion({ 
        question: "question",
        subQuestion: undefined,
        hint: "hint",
        answer: "answer"
      });

      expect(createQuestionFunction).toHaveBeenCalledWith(
        id,
        {
          question: "question",
          subQuestion: "",
          hint: "hint",
          answer: "answer"
        },
      );
    });

    it("calls onEditQuestion", () => {
      wrapper.setState({
        toggledQuestion: question,
        toggledQuestionId: question.id
      })

      instance.onEditQuestion({ 
        question: "potato",
      });

      expect(saveQuestionFunction).toHaveBeenCalledWith(
        id,
        question.id,
        {...question, question: "potato"}
      );
    });

    it("calls deleteQuestion and updates the state if succeed", async () => {
      wrapper.setState({
        deleteQuestionFormOpen: true,
        toggledQuestionId: question.id
      });

      await instance.onDeleteQuestion();


      expect(deleteQuestionFunction).toHaveBeenCalledWith(
        id,
        question.id
      );
      expect(wrapper.state().deleteQuestionFormOpen).toEqual(false);    
    });
  });
});
