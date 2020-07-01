import React from "react";
import { shallow } from "enzyme";

import { LoadingScreen } from "../index";
import toJson from "enzyme-to-json";
import { LinearProgress } from "@material-ui/core";

describe("", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <LoadingScreen
        classes={{
          boxContainer: "box-container",
          boxContent: "box-content",
          typography: "typography",
          linearProgressBar: "linear-progress-bar"
        }}/>
    )
  });


  it("displays the loading screen", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find(LinearProgress)).toHaveLength(1);
  });
});