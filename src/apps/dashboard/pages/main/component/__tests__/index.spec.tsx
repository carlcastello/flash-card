import React from "react";

import { Main } from "../index";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import LoadingScreen from "../../../../../commons/components/loading-screen";
import StyledModal from "../../../../components/styled-modal";
import AddCard from "../../../../components/add-card";
import InformationCard from "../../../../components/information-card";

describe("The Main Dashboard", () => {
  const id = "489ebf1e-91b3-4cfb-9f07-3792310ded9d";

  let wrapper: any;
  let instance: any;

  let push: any;
  let fetchCreatedQuizesFunction: any;
  let deleteQuizFunction: any;

  beforeEach(() => {
    push = jest.fn();

    fetchCreatedQuizesFunction = jest.fn();
    deleteQuizFunction = jest.fn().mockResolvedValue(null);

    wrapper = shallow(
      <Main
        isFullPageLoading={false}
        requiredData={["Hello World"]}
        createdQuizes={[
          {
            id,
            quizSummary: {
              title: 'Quiz 1',
              description: 'The quick ',
            }
          }
        ]}
        fetchCreatedQuizes={fetchCreatedQuizesFunction}
        deleteCreatedQuiz={deleteQuizFunction}
        isDeletingQuiz={false}
        classes={{
          gridContainer: "grid-container"
        }}
        history={{ push } as any}
        location={{} as any}
        match={{} as any}
      />
    );

    instance = wrapper.instance();
  });

  describe("The Render Funcion", () => {
    it("show a loading screen", () => {
      wrapper.setProps({ isFullPageLoading: true })
      wrapper.update();

      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(LoadingScreen)).toHaveLength(1);
    });

    it("shows empty dashboard", () => {
      wrapper.setProps({ createdQuizes: [] })
      wrapper.update();

      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(LoadingScreen)).toHaveLength(0);
    });

    it("shows dashboard modal ", () => {
      wrapper.setState({ moduleModalOpen: true, toggleModuleId: 'modal-id' })
      wrapper.update();

      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(StyledModal).props().isOpen).toBeTruthy();
    });

    it("shows the dashboard", () => {
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(LoadingScreen)).toHaveLength(0);
    });
  });

  describe("The Push methods", () => {
    it("calls push to '/dashboard/quiz' onQuizCreate", () => {
      wrapper.find(AddCard).simulate("click");
      expect(push).toHaveBeenCalledWith("/dashboard/quiz");
    });

    it("calls push to `/quiz/${quizId}` onQuizClick", () => {
      wrapper.find(InformationCard).simulate("click");
      expect(push).toHaveBeenCalledWith(`/quiz/${id}`);
    });

    it("calls push to `/dashboard/quiz/${id}` onQuizEdit", () => {
      instance.onQuizEdit("this-is-an-id");
      expect(push).toHaveBeenCalledWith("/dashboard/quiz/this-is-an-id");
    });
  });

  describe("The state onQuizDeleteToggle", () => {
    it ("opens the delete modal", () => {
      expect(wrapper.state()).toEqual({
        toggleModuleId: "",
        moduleModalOpen: false
      });
      instance.onQuizDeleteToggle(id);
      expect(wrapper.state()).toEqual({
        toggleModuleId: id,
        moduleModalOpen: true
      });
    });
  });

  describe("The call to deleteCreatedQuiz function", () => {
    it("successful of the deleteCreatedQuizFunction and clears the state", async () => {
      wrapper.setState({
        toggleModuleId: id,
        moduleModalOpen: true
      });
      
      await instance.onQuizDelete();

      expect(deleteQuizFunction).toHaveBeenCalledWith(id);
      
      wrapper.update();

      expect(wrapper.state()).toStrictEqual({
        toggleModuleId: "",
        moduleModalOpen: false
      });
    });

    it("failure of the deleteCreatedQuizFunction", async () => {
      const originalState = {
        toggleModuleId: id,
        moduleModalOpen: true
      }
      let deleteCreatedQuizFunction = jest.fn().mockRejectedValue(null)

      wrapper.setProps({
        deleteCreatedQuiz: deleteCreatedQuizFunction
      })
      wrapper.setState(originalState);
      
      wrapper.update();

      await instance.onQuizDelete();

      expect(deleteCreatedQuizFunction).toHaveBeenCalledWith(id);
      
      wrapper.update();

      expect(wrapper.state()).toStrictEqual(originalState);
    });
  });
});