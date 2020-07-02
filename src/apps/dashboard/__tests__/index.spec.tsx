import React from 'react';
import Web  from '../index';
import { shallow } from 'enzyme';

describe("Web APP", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<Web/>);
  });


  it("Takes snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  })
});