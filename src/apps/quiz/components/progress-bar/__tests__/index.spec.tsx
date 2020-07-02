import React from "react";
import { shallow } from "enzyme";

import { ProgressBar } from "../index";
import { FlashcardStatus } from "../../flash-card/types";
import toJson from "enzyme-to-json";
import { LinearProgress } from "@material-ui/core";

describe("", () => {
  
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <ProgressBar
        currentQuestion={3}
        totalQuestion={4}
        flashcardStatus={FlashcardStatus.CORRECT}
        classes={{
          title: "tittle",
          progressBarContainer: "progress-bar-container",
          progressBar: "progress-bar"
        }}/>
    )
  });

  describe("the render function", () => {
    it("renders", () => {
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(LinearProgress)).toHaveLength(1);
      expect(wrapper.find(LinearProgress).props().value).toEqual(75);
    });
  });
});