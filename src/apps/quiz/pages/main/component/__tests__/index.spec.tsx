import React from "react";
import { shallow } from "enzyme";

import { MainQuizPage } from "../index";
import toJson from "enzyme-to-json";
import LoadingScreen from "../../../../../commons/components/loading-screen";
import EmptyScreen from "../../../../components/empty-screen";
import { QuizStatus } from "../enum";
import { FlashcardStatus } from "../../../../components/flash-card/types";


describe("The Quiz Main Page Component", () => {
  
  const quizId: string = "quiz-id";

  let wrapper: any;
  let instance: any;
  let fetchQuizFunction: any;

  let push: any;

  beforeEach(() => {
    fetchQuizFunction = jest.fn();
    push = jest.fn();

    wrapper = shallow(
      <MainQuizPage
        questions={[]}
        requiredData={[]}
        fetchQuiz={fetchQuizFunction}
        classes={{
          boxContent: "box-content",
          boxContainer: "box-container",
          progressBarContainer: "progressBarContainer",
          iconButton: "icon-button",
        }}
        history={{ push } as any}
        location={{} as any}
        match={{
          params: {
            quizId
          }
        } as any}/>
    );
    instance = wrapper.instance();
  });

  describe("the component did mount", () => {
    it("calls fetch quiz function if requiredData and quizId", () => {
      
      wrapper = shallow (
        <MainQuizPage
          questions={[]}
          requiredData={["hello"]}
          fetchQuiz={fetchQuizFunction}
          classes={{
            boxContent: "box-content",
            boxContainer: "box-container",
            progressBarContainer: "progressBarContainer",
            iconButton: "icon-button",
          }}
          history={{ push: jest.fn() } as any}
          location={{} as any}
          match={{
            params: {
              quizId
            }
          } as any}/>
      );


      expect(fetchQuizFunction).toHaveBeenCalledWith(quizId);
    });

    it("doesn't call fetch quiz function if quizId but not requiredData", () => {
      fetchQuizFunction = jest.fn();
      wrapper = shallow (
        <MainQuizPage
          questions={[]}
          requiredData={[]}
          fetchQuiz={fetchQuizFunction}
          classes={{
            boxContent: "box-content",
            boxContainer: "box-container",
            progressBarContainer: "progressBarContainer",
            iconButton: "icon-button",
          }}
          history={{ push: jest.fn() } as any}
          location={{} as any}
          match={{
            params: {
              quizId
            }
          } as any}/>
      );

      expect(fetchQuizFunction).not.toHaveBeenCalled();
    });

    it("doesn't call fetch quiz function if not quizId and not requiredData", () => {
      fetchQuizFunction = jest.fn();
      wrapper = shallow (
        <MainQuizPage
          questions={[]}
          requiredData={[]}
          fetchQuiz={fetchQuizFunction}
          classes={{
            boxContent: "box-content",
            boxContainer: "box-container",
            progressBarContainer: "progressBarContainer",
            iconButton: "icon-button",
          }}
          history={{ push: jest.fn() } as any}
          location={{} as any}
          match={{
            params: {}
          } as any}/>
      );

      expect(fetchQuizFunction).not.toHaveBeenCalled();
    });
    
    it("doesn't call fetch quiz function if requiredData but not quizId", () => {
      fetchQuizFunction = jest.fn();
      wrapper = shallow (
        <MainQuizPage
          questions={[]}
          requiredData={["hello"]}
          fetchQuiz={fetchQuizFunction}
          classes={{
            boxContent: "box-content",
            boxContainer: "box-container",
            progressBarContainer: "progressBarContainer",
            iconButton: "icon-button",
          }}
          history={{ push: jest.fn() } as any}
          location={{} as any}
          match={{
            params: {}
          } as any}/>
      );

      wrapper.update();

      expect(fetchQuizFunction).not.toHaveBeenCalled();
    });
  });

  describe("The render function", () => {
    it("shows a loading screen if requiredData length is not 0", () => {
      wrapper.setProps({ requiredData: ["hello"]});

      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(LoadingScreen)).toHaveLength(1);

      wrapper.setProps({ requiredData: []});

      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(LoadingScreen)).not.toHaveLength(1);
    });

    it("shows an empty screen if question length is 0", () => {
      wrapper.setProps({ questions: []});
      
      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(EmptyScreen)).toHaveLength(1);

      wrapper.setProps({ questions: [{
        id: "id",
        question: "question",
        subQuestion: "sub-question",
        hint: "hint",
        answer: "hint",
      }]});

      expect(toJson(wrapper)).toMatchSnapshot();
      expect(wrapper.find(EmptyScreen)).not.toHaveLength(1);
    })

    it("shows the completion screen if quizStatus is complete", () => {
      wrapper.setState({ 
        quizStatus: QuizStatus.COMPLETED,
        questions: [{
          id: "id",
          question: "question",
          subQuestion: "sub-question",
          hint: "hint",
          answer: "hint",
        }]
      });

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe("The Redirects", () => {
    it("calls push on redirectToDashboard", () => {
      instance.redirectToDashboard();
      expect(push).toHaveBeenCalledWith("/");
    });
    
    it("calls push on onEditQuiz", () => {
      instance.onEditQuiz();
      expect(push).toHaveBeenCalledWith(`/dashboard/quiz/${quizId}`);
    });

    it("redirect to dashboard onCloseQuiz", () => {
      wrapper.setState({ quizStatus: QuizStatus.IN_PROGRESS });
      instance.onCloseQuiz();
      expect(push).not.toHaveBeenCalled();

      wrapper.setState({ quizStatus: QuizStatus.COMPLETED });
      instance.onCloseQuiz();
      expect(push).toHaveBeenCalledWith("/");
    });
  });

  describe("The state functions", () => {

    it("toggles confirmModalToogle onCloseIconToggle", () => {
      wrapper.setState({ confirmModalToogle: false });

      instance.onCloseIconToggle();

      expect(wrapper.state().confirmModalToogle).toEqual(true);
    });

    it("updates quizStatus and close the modal onConfirmModal", async () => {
      wrapper.setState({ quizStatus: QuizStatus.IN_PROGRESS }); 

      await instance.onConfirmModal();

      expect(wrapper.state().quizStatus).toEqual(QuizStatus.STOPPED);
      expect(push).toHaveBeenCalledWith("/");

    });

    it("updates currentFlashcardStatus and increment progressIndex onUpdateFlashcard", () => {
      wrapper.setState({
        currentFlashcardStatus: FlashcardStatus.HINT,
        progressIndex: 0,
      });

      instance.onUpdateFlashcard(FlashcardStatus.CORRECT);

      expect(wrapper.state().currentFlashcardStatus).toEqual(FlashcardStatus.CORRECT);
      expect(wrapper.state().progressIndex).toEqual(1);
    });

    it("updats quizStatus to review and reset the state onReviewToggle", () => {
      wrapper.setState({
        quizStatus: QuizStatus.COMPLETED,
        progressIndex: 10,
        questionIndex: 10
      });

      instance.onReviewToggle();
      
      expect(wrapper.state().quizStatus).toEqual(QuizStatus.REVIEW);
      expect(wrapper.state().progressIndex).toEqual(0);
      expect(wrapper.state().questionIndex).toEqual(0);
    });
  });
});