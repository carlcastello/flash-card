import React from "react";
import { shallow } from "enzyme";

import { AnswerCard } from "../index";
import { FlashcardStatus } from "../../../types";
import toJson from "enzyme-to-json";
import { Input, Collapse } from "@material-ui/core";

describe("The AnswerCard", () => {

  let focusFunction: any;
  let blurFunction: any;

  let answer: string = "This is the correct answer";

  let wrapper: any;
  let instance: any;

  beforeEach(() => {
    focusFunction = jest.fn();
    blurFunction = jest.fn();

    wrapper = shallow(
      <AnswerCard
        answer={answer}
        flashcardStatus={FlashcardStatus.DEFAULT}
        ref={jest.fn()}
        classes={{
          paper: "paper",
          input: "string",
          typography: "typography"
        }}/>
    );

    instance = wrapper.instance();
    instance.inputRef = { focus: focusFunction, blur: blurFunction };
  });

  describe("the render funtion", () => {
    it("shows the answer card as FlashcardStatus.DEFAULT", () => {
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(Collapse).props().in).toEqual(false);
      expect(wrapper.find(Input)).toHaveLength(2);
      expect(wrapper.find(Input).at(0).props().disabled).toEqual(false);
    });

    it("shows the answer casrd as FlashcardStatus.CORRECT", () => {
      wrapper.setProps({ flashcardStatus: FlashcardStatus.CORRECT });

      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(Collapse).props().in).toEqual(false);
      expect(wrapper.find(Input)).toHaveLength(2);
      expect(wrapper.find(Input).at(0).props().disabled).toEqual(true);
    });

    it("shows the correct answer when FlashcardStatus.WRONG", () => {
      wrapper.setState({ hideAnswer: false });
      wrapper.setProps({ flashcardStatus: FlashcardStatus.WRONG });

      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(Collapse).props().in).toEqual(true);
      expect(wrapper.find(Input)).toHaveLength(2);
      expect(wrapper.find(Input).at(0).props().disabled).toEqual(true);
    });

    it("shows the correct answer and removed the input when FlashcardStatus.HINT", () => {
      wrapper.setState({ hideAnswer: false });
      wrapper.setProps({ flashcardStatus: FlashcardStatus.HINT });

      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(Collapse).props().in).toEqual(true);
      expect(wrapper.find(Input)).toHaveLength(1);
    });
  });

  describe("The componentDidUpdate", () => {
    it("calls neither function if currentProps == prevProps", () => {
      expect(focusFunction).toHaveBeenCalledTimes(0);
      expect(blurFunction).toHaveBeenCalledTimes(0);

      wrapper.setProps({ flashcardStatus: FlashcardStatus.DEFAULT });

      expect(focusFunction).toHaveBeenCalledTimes(0);
      expect(blurFunction).toHaveBeenCalledTimes(0);
    });

    it("calls focusFunction if FlashcardStatus.DEFAULT and currentProps != prevProps", () => {
      expect(focusFunction).toHaveBeenCalledTimes(0);
      expect(blurFunction).toHaveBeenCalledTimes(0);

      // Updating the props to rogger on Focus between CORRECT -> DEFAULT
      wrapper.setProps({ flashcardStatus: FlashcardStatus.CORRECT });
      expect(focusFunction).toHaveBeenCalledTimes(0);
      expect(blurFunction).toHaveBeenCalledTimes(1);

      wrapper.setProps({ flashcardStatus: FlashcardStatus.DEFAULT });

      expect(focusFunction).toHaveBeenCalledTimes(1);
      expect(blurFunction).toHaveBeenCalledTimes(1);
    });

    it("calls blurFunction if not FlashcardStatus.DEFAULT and currentProps != prevProps", () => {
      expect(focusFunction).toHaveBeenCalledTimes(0);
      expect(blurFunction).toHaveBeenCalledTimes(0);

      wrapper.setProps({ flashcardStatus: FlashcardStatus.CORRECT });

      expect(focusFunction).toHaveBeenCalledTimes(0);
      expect(blurFunction).toHaveBeenCalledTimes(1);
    });
  });

  describe("The state function", () => {

    it("updates the state answer onInputChange", () => {
      const preventDefaultFunction: any = jest.fn();

      expect(wrapper.state().answer).toEqual("");
 
      instance.onInputChange({
        target: {value: 123},
        preventDefault: preventDefaultFunction
      });
 
      expect(wrapper.state().answer).toEqual(123);
      expect(preventDefaultFunction).toHaveBeenCalledTimes(1);
    });

    it("updates hideAnswer onEnter", () => {
      expect(wrapper.state().hideAnswer).toEqual(true);

      instance.onEnter();

      expect(wrapper.state().hideAnswer).toEqual(false);
    });

    it("updates hideAnswer onExit", () => {
      wrapper.setState({ hideAnswer: false })

      instance.onExit();

      expect(wrapper.state().hideAnswer).toEqual(true);
    });
  });
});