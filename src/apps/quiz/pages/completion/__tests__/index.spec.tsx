import React from "react";
import { shallow } from "enzyme";

import { CompletionPage } from "../index";
import toJson from "enzyme-to-json";

import { Typography, Button, IconButton } from "@material-ui/core";

describe("The Completion Page", () => {

  let onCloseFunction: any;
  let onReviewFunction: any;

  let wrapper: any;

  beforeEach(() => {

    onCloseFunction = jest.fn();
    onReviewFunction = jest.fn();

    wrapper = shallow(
      <CompletionPage 
        onClose={onCloseFunction}
        onReview={onReviewFunction}
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
    it("calls the onReviewFunction", () => {
      wrapper.find(Button).simulate("click");
      expect(onReviewFunction).toHaveBeenCalled();
    });

    it("calls the onCloseFunction", () => {
      wrapper.find(IconButton).simulate("click");
      expect(onCloseFunction).toHaveBeenCalled();
    });
  });
});