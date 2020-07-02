import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json'

import { InformationCard }  from '../index';
import { IconButton, Typography } from '@material-ui/core';


describe("Infromation Card", () => {

  const id: string = "information-card"

  let wrapper: any;
  let instance: any;
  let onEditFunction: any;
  let onDeleteFunction: any;
  let onClickFunction: any;

  beforeEach(() => {
    onEditFunction = jest.fn();
    onDeleteFunction = jest.fn();
    onClickFunction = jest.fn();

    wrapper = shallow(
      <InformationCard
        id={id}
        title="Information Card"
        description="This is an Information Card"
        onEdit={onEditFunction}
        onDelete={onDeleteFunction}
        onClick={onClickFunction}
        classes={{
          inlineTypography: "inline-typography",
          paperContainer: "paper-container",
          iconButton: "icon-button",
          iconButtonContainer: "icon-button-container",
        }}
      />
    );
    instance = wrapper.instance();
  });

  describe("The Information Card", () => {
    it("Shows the Card without Subtitle", () => {
      expect(toJSON(wrapper)).toMatchSnapshot();
      expect(wrapper.find(Typography)).toHaveLength(2);
    });
    
    it("Shows the Card with Subtitle", () => {
      wrapper.setProps({subtitle: "hello world"});
      wrapper.update();

      expect(toJSON(wrapper)).toMatchSnapshot();
      expect(wrapper.find(Typography)).toHaveLength(3);
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

  describe("Prop Functions", () => {
    it("Calls the Edit Function when Edit Icon Click", () => {
      wrapper.find(IconButton).at(0).simulate("click", { stopPropagation() {} })
      expect(onEditFunction).toHaveBeenCalledWith(id);
    });

    it("Calls the Delete Function when Delete Icon Click", () => {
      wrapper.find(IconButton).at(1).simulate("click", { stopPropagation() {} })
      expect(onDeleteFunction).toHaveBeenCalledWith(id);
    });
  })
});