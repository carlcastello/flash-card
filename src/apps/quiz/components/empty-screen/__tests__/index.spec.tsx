import React from "react";
import { shallow } from "enzyme";

import { EmptyPage } from "../index";
import toJson from "enzyme-to-json";

import { Typography, Button, IconButton } from "@material-ui/core";

describe("The EmptyScreen", () => {

  let onCloseFunction: any;
  let onEditFunction: any;

  let wrapper: any;

  beforeEach(() => {

    onCloseFunction = jest.fn();
    onEditFunction = jest.fn();

    wrapper = shallow(
      <EmptyPage 
        onClose={onCloseFunction}
        onEdit={onEditFunction}
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
      expect(onEditFunction).toHaveBeenCalled();
    });

    it("calls the onCloseFunction", () => {
      wrapper.find(IconButton).simulate("click");
      expect(onCloseFunction).toHaveBeenCalled();
    });
  });
});