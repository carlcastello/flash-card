import React from "react";

import { ButtonCard } from "../index";
import { FlashcardStatus } from "../../../types";
import { shallow } from "enzyme";
import { Typography, Button } from "@material-ui/core";
import toJson from "enzyme-to-json";
 
describe("The Button Card", () => {

  let focusFunction: any;
  let blurFunction: any;
  let submitFunction: any;
  let nextFunction: any;

  let wrapper: any;
  let instance: any;

  beforeEach(() => {

    focusFunction = jest.fn();
    blurFunction = jest.fn();
    submitFunction = jest.fn();
    nextFunction = jest.fn();

    wrapper = shallow(
      <ButtonCard
        flashcardStatus={FlashcardStatus.DEFAULT}
        submit={submitFunction}
        next={nextFunction}
        classes={{
          button: "button"
        }}/>
    );

    instance = wrapper.instance();
    instance.buttonRef = { focus: focusFunction, blur: blurFunction };
  });

  describe("The render function",  () => {
    it("shows the submit button", () => {
      expect(wrapper.find(Typography).props().children).toEqual("Submit");
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("shows the next button", () => {
      wrapper.setProps({ flashcardStatus: FlashcardStatus.CORRECT });

      expect(wrapper.find(Typography).props().children).toEqual("Next");
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe("The componentDidUpdate", () => {
    it ("calls focusFunction if it updates to any status but flashcardStatus.DEFAULT", () => {
      expect(focusFunction).toHaveBeenCalledTimes(0);
      expect(blurFunction).toHaveBeenCalledTimes(0);

      wrapper.setProps({ flashcardStatus: FlashcardStatus.CORRECT });

      expect(focusFunction).toHaveBeenCalledTimes(1);
      expect(blurFunction).toHaveBeenCalledTimes(0);
    });

    it ("calls blurFunction if it updates to flashcardStatus.DEFAULT", () => {
      expect(focusFunction).toHaveBeenCalledTimes(0);
      expect(blurFunction).toHaveBeenCalledTimes(0);

      // Updating the props to trigger on blur between CORRECT -> DEFAULT transition
      wrapper.setProps({ flashcardStatus: FlashcardStatus.CORRECT });

      expect(focusFunction).toHaveBeenCalledTimes(1);
      expect(blurFunction).toHaveBeenCalledTimes(0);

      wrapper.setProps({ flashcardStatus: FlashcardStatus.DEFAULT });

      expect(focusFunction).toHaveBeenCalledTimes(1);
      expect(blurFunction).toHaveBeenCalledTimes(1);
    });
  });

  describe("The onClickFunction", () => {
    let preventDefaultFunction: any;

    beforeEach(() => {
      preventDefaultFunction = jest.fn();
    });

    it("calls the onSubmitFunction if FlashcardStatus.DEFAULT", () => {
      wrapper.find(Button).simulate("click", { preventDefault: preventDefaultFunction })

      expect(preventDefaultFunction).toHaveBeenCalled();
      expect(submitFunction).toHaveBeenCalled();
    });

    it("calls the onNextFunction", () => {
      wrapper.setProps({ flashcardStatus:  FlashcardStatus.WRONG });

      wrapper.find(Button).simulate("click", { preventDefault: preventDefaultFunction })

      expect(preventDefaultFunction).toHaveBeenCalled();
      expect(nextFunction).toHaveBeenCalled();
    });
  });
});