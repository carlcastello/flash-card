import React from "react";
import { shallow } from "enzyme";
import { StyledModal } from "../index";
import toJson from "enzyme-to-json";
import { Button, IconButton } from "@material-ui/core";


describe("The Styled Modal", () => {

  let onIgnoreFunction: any;
  let onConfirmFunction: any;

  let wrapper: any;

  beforeEach(() => {
    onIgnoreFunction = jest.fn();
    onConfirmFunction = jest.fn();

    wrapper = shallow(
      <StyledModal
        isOpen={false}
        onConfirm={onConfirmFunction}
        onIgnore={onIgnoreFunction}
        classes={{
          modalContainer: "modal-container",
          modalPaperContainer: "modal-paper-container",
          closeButton: "close-button",
        }}
      />
    )
  });


  describe("the render function", () => {
    it("shows a confirmation modal", () => {
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(Button)).toHaveLength(2);
    });

    it("show a dialog modal", () => {
      wrapper.setProps({ onConfirm: undefined });
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(Button)).toHaveLength(0);
    });
  });

  describe("the onClick", () => {
    it("calls the onIgnoreFunction if IconButton is clicked", () => {
      wrapper.find(IconButton).simulate("click");
      expect(onIgnoreFunction).toHaveBeenCalled();
    }); 

    it("calls the onIgnoreFunction if 'no' Button is clicked", () => {
      wrapper.find(Button).at(0).simulate("click");
      expect(onIgnoreFunction).toHaveBeenCalled();
    }); 

    it("calls the onConfirmFunction if 'yes' Button is clicked", () => {
      wrapper.find(Button).at(1).simulate("click");
      expect(onConfirmFunction).toHaveBeenCalled();
    });
  });
});