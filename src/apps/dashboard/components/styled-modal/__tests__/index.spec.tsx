import React from "react";
import { shallow } from "enzyme";
import { StyledModal } from "../index"; 
import toJson from "enzyme-to-json";
import { Close } from "@material-ui/icons";
import { LinearProgress, Button, Modal } from "@material-ui/core";

describe("Styled Modal", () => {
  
  let wrapper: any;
  let onIgnore: any;

  beforeEach(() => {
    onIgnore = jest.fn();

    wrapper = shallow(
      <StyledModal
        isOpen={false}
        onIgnore={onIgnore}

        // isOpen: boolean,
        // onConfirm?: () => void,
        // onIgnore: () => void,
        // isLoading?: boolean,


        classes={{
          modalContainer: "modal-container",
          modalPaperContainer: "modal-paper-container",
          closeButton: "close-button",
        }}/>
    )
  });

  describe("the Styled Modal", () => {
    it("renders the close view", () => {
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(Modal).props().open).toBeFalsy();
    });

    it("renders with a button grid", () => {
      wrapper.setProps({ onConfirm: jest.fn(), isOpen: true });

      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(Modal).props().open).toBeTruthy();
      expect(wrapper.find(Close)).toHaveLength(1);
      expect(wrapper.find(LinearProgress)).toHaveLength(0);
      expect(wrapper.find(Button)).toHaveLength(2);
    });

    it("renders with a loading ", () => {
      wrapper.setProps({ onConfirm: jest.fn(), isOpen: true, isLoading: true });

      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(Modal).props().open).toBeTruthy();
      expect(wrapper.find(Close)).toHaveLength(1);
      expect(wrapper.find(LinearProgress)).toHaveLength(1);
      expect(wrapper.find(Button)).toHaveLength(0);
    });
  });

});