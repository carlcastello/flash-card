import React from "react";

import { shallow } from "enzyme";

import { QuizSummary } from "../index";
import toJson from "enzyme-to-json";
import Form from "../../../../../components/form";
import { Box } from "@material-ui/core";
import { IFormResponse } from "../../../../../components/form/types";

describe("The Quiz Summary", () => {

  let wrapper: any;
  let instance: any;

  let onCreateQuizSummaryFunction: any;
  let onSaveQuizSummaryFunction: any;

  beforeEach(() => {
    onCreateQuizSummaryFunction = jest.fn();
    onSaveQuizSummaryFunction = jest.fn();

    wrapper = shallow(
      <QuizSummary
        isLoading={true}
        quizId={undefined}
        quizSummary={undefined}
        onCreateQuizSummary={onCreateQuizSummaryFunction}
        onSaveQuizSummary={onSaveQuizSummaryFunction}
        />
    );

    instance = wrapper.instance();
  })

  describe("The render function", () => {
    it("renders the form container", () => {
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(Box)).toHaveLength(2);
      expect(wrapper.find(Form)).toHaveLength(1);
    });
  });

  describe("The onSubmit functions", () => {
    it("doesn't have a quizId thus call onCreateQuizSummary", () => {
      const formResponse: IFormResponse = { 
        title: "potato",
        description: "salad",
        hello: "world"
      }; 
      wrapper.setProps({ quizId: undefined });
      instance.onFormSubmit(formResponse);
      expect(onCreateQuizSummaryFunction).toHaveBeenCalledWith(formResponse);
    });

    it("does have a quizId thus call onSaveQuizSummary", () => {
      const quizId: string = "this-is-and-id";
      const formResponse: IFormResponse = {
        title: "potato",
        description: "salad",
        hello: "world"
      }; 
      wrapper.setProps({ quizId });
      instance.onFormSubmit(formResponse);
      expect(onSaveQuizSummaryFunction).toHaveBeenCalledWith(quizId, formResponse);

    });
  })
});