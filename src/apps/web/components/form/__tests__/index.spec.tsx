import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json'

import { Form }  from '../index';
import { Button, LinearProgress } from '@material-ui/core';


describe("Web APP", () => {

  const inputValidator = (value: string) => {
    if (!/[0-9]+/.test(value)) {
      return 'Invalid'
    }
    return false; // Form is Valid: Returns No Error Message
  }

  let wrapper: any;
  let instance: any;
  let onSuccessFunction: any;

  beforeEach(() => {
    onSuccessFunction = jest.fn();

    wrapper = shallow(
      <Form
        fields={[
          {
            id: 'potato salad',
            label: 'potato-salad',
            type: 'string',
            validator: inputValidator
          }
        ]}
        isLoading={false}
        onSuccess={onSuccessFunction}
        classes={{
          formControl: 'form-control',
          formLabel: 'form-label',
          formInput: 'form-input',
          formHelperText: 'form-helper-text',
          formBottomContainer: 'form-bottom-container',
        }}/>
    );
    instance = wrapper.instance();
  });

  describe("The Button Container", () => {
    it("Shows Button", () => {
      expect(toJSON(wrapper)).toMatchSnapshot();
      expect(wrapper.find(Button)).toHaveLength(1);
    });
  
    it("Shows Loading", () => {
      wrapper.setProps({isLoading: true});
      wrapper.update();

      expect(toJSON(wrapper)).toMatchSnapshot();
      expect(wrapper.find(LinearProgress)).toHaveLength(1);
    });
  });

  describe("Form State after onInputChange", () => {
    
    it("Valid Input", () => {
      instance.onInputChange(
        "potato-salad",
        inputValidator
      )({target: {value: 123}});

      expect(wrapper.state()).toEqual({ 
        fields: {
          'potato-salad': {
            value: 123,
            error: false
          }
        }
      });
    });

    it("InValid Input", () => {
      instance.onInputChange(
        "potato-salad",
        inputValidator
      )({target: {value: 'asd'}});

      expect(wrapper.state()).toEqual({ 
        fields: {
          'potato-salad': {
            value: 'asd',
            error: 'Invalid'
          }
        }
      });
    }); 
  });

  describe("Form Submit Process", () => {

    it("On Button Click with Empty Field", () => {
      const submitButton = wrapper.find(Button);
      submitButton.simulate("click");
      expect(onSuccessFunction).toHaveBeenCalledWith({});
    });

    it("On Button Click with Value", () => {
      instance.onInputChange(
        "potato-salad",
        inputValidator
      )({target: {value: 123}});
      
      const submitButton = wrapper.find(Button);
      submitButton.simulate("click");
      expect(onSuccessFunction).toHaveBeenCalledWith({
        "potato-salad": 123
      });
    });
  });
});