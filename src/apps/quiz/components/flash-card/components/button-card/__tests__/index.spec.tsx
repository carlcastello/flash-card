import React from "react";

import { ButtonCard } from "../index";
import { FlashcardStatus } from "../../../types";
import { shallow } from "enzyme";
import { Typography, Button } from "@material-ui/core";
import toJson from "enzyme-to-json";
 
describe("The Button Card", () => {

  let submitFunction: any;
  let nextFunction: any;

  let wrapper: any;

  beforeEach(() => {
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