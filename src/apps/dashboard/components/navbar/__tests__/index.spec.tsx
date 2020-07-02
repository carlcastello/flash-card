import React from 'react';
import { shallow } from "enzyme";
import { Navbar } from "../index";
import toJson from 'enzyme-to-json';

describe("NavBar", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <Navbar
        classes={{
          link: "link"
        }}/>
    )
  });
  
  it("Renders the NavBar", () => { 
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});