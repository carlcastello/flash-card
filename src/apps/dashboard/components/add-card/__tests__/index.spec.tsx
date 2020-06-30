import React from "react";
import { shallow } from "enzyme";

import { AddCard } from "../index";


describe("Add Card", () => {

  let wrapper: any;
  let instance: any;
  let onClick: any;

  beforeEach(() => {
    onClick = jest.fn();
    wrapper = shallow(
      <AddCard
        onClick={onClick}
        classes={{
          paperContainer: 'paper-container',
          boxContainer: 'box-container'
        }}/>
    );
    instance = wrapper.instance();
  });

  describe("The Add Card", () => {
    it("renders", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("State after onMouseHoverAction", () => {
    it("Changes the state if hasHoverEffect", () => {
      expect(wrapper.state().paperElevation).toEqual(3);
      wrapper.setProps({hasHoverEffect: false});
      wrapper.update();
      instance.onMouseHoverAction(6)();
      expect(wrapper.state().paperElevation).toEqual(3);
    });

    it("Changes the state if hasHoverEffect", () => {
      expect(wrapper.state().paperElevation).toEqual(3);
      wrapper.setProps({hasHoverEffect: true});
      wrapper.update();
      instance.onMouseHoverAction(6)();
      expect(wrapper.state().paperElevation).toEqual(6);
    });
  });
});