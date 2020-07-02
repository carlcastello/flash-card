import React from "react";
import { shallow } from "enzyme";

import { QuestionCard } from "../index";
import { FlashcardStatus } from "../../../types";
import toJson from "enzyme-to-json";
import { Typography, IconButton } from "@material-ui/core";

describe("", () => {

  let onSkipFunction: any;

  let wrapper: any;

  beforeEach(() => {
    onSkipFunction = jest.fn();

    wrapper = shallow(
      <QuestionCard
        flashcardStatus={FlashcardStatus.DEFAULT}
        questionObject={{
          question: "Potato Salad",
          hint: "This is a hint",
        }}
        onSkip={onSkipFunction}
        classes={{
          paper: "paper",
          boxButtonContainer: "box-button-container",
          boxQuestionaireContainer: "box-questionaire-container",
          questionTypography: "question-typography"
        }}/>
    );
  });

  describe("The render function", () => {
    it("renders as FlashcardStatus.DEFAULT with subQuestion", () => {
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(Typography)).toHaveLength(1);
      expect(wrapper.find(IconButton).props().disabled).toEqual(false);
    })

    it("renders as none FlashcardStatus.DEFAULT without subQuestion", () => {
      wrapper.setProps({
        flashcardStatus: FlashcardStatus.HINT,
        questionObject: {
          question: "Potato Salad",
          hint: "This is a hint",
          subQuestion: "this is a sub"
        }
      });

      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(Typography)).toHaveLength(2);
      expect(wrapper.find(IconButton).props().disabled).toEqual(true);
    });
  });
});