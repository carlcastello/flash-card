import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json'

import { Form }  from '../index';

describe("Web APP", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <Form
        fields={[
          {
            id: 'potato salad',
            label: 'potato-salad',
            type: 'string'
          }
        ]}
        isLoading={false}
        onSuccess={() => {}}
        classes={{
          formControl: 'form-control',
          formLabel: 'form-label',
          formInput: 'form-input',
          formHelperText: 'form-helper-text',
          formBottomContainer: 'form-bottom-container',
        }}/>
    );
  });


  it("Takes snapshot", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  })
});