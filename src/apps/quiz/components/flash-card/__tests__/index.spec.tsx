import React from "react";
import { shallow } from "enzyme";

import { Flashcard } from "../index"; 
import toJson from "enzyme-to-json";
import AnswerCard from "../components/answer-card";
import ButtonCard from "../components/button-card";
import QuestionCard from "../components/question-card";
import { FlashcardStatus } from "../types";


describe("The Flash Card", () => {

  let updateFunction: any;
  let nextFunction: any;

  let wrapper: any;
  let instance: any;

  beforeEach(() => {
    updateFunction = jest.fn();
    nextFunction = jest.fn();

    wrapper = shallow(
      <Flashcard
        update={updateFunction}
        next={nextFunction}
        question={{
          id: "id",
          question: "question",
          subQuestion: "sub-question",
          hint: "hint",
          answer: "answer",
        }}
        flashcardStatus={FlashcardStatus.DEFAULT}
        classes={{}}/>
    );

    instance = wrapper.instance();
  });

  describe("the render function", () => {
    it("renders", () => {
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(QuestionCard)).toHaveLength(1);
      expect(wrapper.find(AnswerCard)).toHaveLength(1);
      expect(wrapper.find(ButtonCard)).toHaveLength(1);
    });
  });

  describe("the onSubmit Function", () => {
    it("calls the updateFunction with FlashcardStatus.CORRECT", () => {
      instance.answerCardRef.current = { state: {answer: "answer"} };

      instance.onSubmit();
      expect(updateFunction).toHaveBeenCalledWith(FlashcardStatus.CORRECT);
    });

    it("calls the updateFunction with FlashcardStatus.WRONG", () => {
      instance.answerCardRef.current = { state: {answer: "potato"} };

      instance.onSubmit();
      expect(updateFunction).toHaveBeenCalledWith(FlashcardStatus.WRONG);
    });
  });

  describe("the onNext Function", () => {
    it("calls the next", () => {
      const setStateFunction: any = jest.fn();

      instance.answerCardRef.current = { setState: setStateFunction };

      instance.onNext();

      expect(nextFunction).toHaveBeenCalledTimes(1);
      expect(setStateFunction).toHaveBeenCalledWith({ answer: "" });
    });
  });

  describe("the onSkip Function", () => {
    it("calls the update function with FlashcardStatus.HINT", () => {
      instance.onSkip();
      expect(updateFunction).toHaveBeenCalledWith(FlashcardStatus.HINT);
    });
  });
});