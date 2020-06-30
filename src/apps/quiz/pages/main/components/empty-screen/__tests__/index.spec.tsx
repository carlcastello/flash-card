import React from "react";
import { shallow } from "enzyme";

import { EmptyScreen } from "../index";
import toJson from "enzyme-to-json";

import { Typography, Button, IconButton } from "@material-ui/core";

describe("The EmptyScreen", () => {

  let onCloseFunction: any;
  let onAddQuestionFunction: any;

  let wrapper: any;

  beforeEach(() => {

    onCloseFunction = jest.fn();
    onAddQuestionFunction = jest.fn();

    wrapper = shallow(
      <EmptyScreen 
        onClose={onCloseFunction}
        onAddQuestion={onAddQuestionFunction}
        classes={{
          
        }}/>
    )
  });  


  describe("The render Function", () => {
    it("shows the main container", () => {
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(Typography)).toHaveLength(1);
    });
  });


  describe("The onClick", () => {
    it("calls the onAddQuestionFunction", () => {
      wrapper.find(Button).simulate("click");
      expect(onAddQuestionFunction).toHaveBeenCalled();
    });

    it("calls the onCloseFunction", () => {
      wrapper.find(IconButton).simulate("click");
      expect(onCloseFunction).toHaveBeenCalled();
    });
  });
});