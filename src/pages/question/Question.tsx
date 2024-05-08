import Paper from "@/components/ui/paper";
import { listQuestion } from "@/data/list-question";
import { useMemo, useState } from "react";
import QuestionStep from "./components/question-step";
import QuestionFinal from "./components/question-final";
import { Progress } from "@/components/ui/progress";

const Question = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [question, setQuestion] = useState<{ id: string; answers: string[] }[]>(
    []
  );

  const handleSaveSelectAnswer = (values: string[]) => {
    setQuestion((prev) => {
      const newQuestion = [...prev];
      newQuestion[currentStep] = {
        id: currentQuestion.id,
        answers: values,
      };
      return newQuestion;
    });
  };

  const handleNext = (values: string[]) => {
    handleSaveSelectAnswer(values);
    setCurrentStep(currentStep + 1);
  };

  const handleBack = (values: string[]) => {
    handleSaveSelectAnswer(values);
    setCurrentStep(currentStep - 1);
  };

  const maxQuestion = listQuestion.length;
  const currentQuestion = useMemo(
    () => listQuestion[currentStep],
    [currentStep]
  );

  const step =
    currentStep === 0
      ? "frist"
      : currentStep === maxQuestion - 1
      ? "last"
      : "middle";

  const percent = (currentStep / maxQuestion) * 100;

  return (
    <>
      <div className="container">
        <Paper className="mt-12 w-[1040px] h-[700px] mx-auto p-14">
          {!currentQuestion && <QuestionFinal />}
          {currentQuestion && (
            <>
              <div className="flex justify-between">
                <p className="text-primary-500 font-bold">Multiple Choice</p>
              </div>
              <Progress className="mt-3" value={percent} />
              <div className="h-full flex flex-col">
                <div className="flex flex-col">
                  <p className="text-xl font-bold mt-5">
                    Question {currentStep + 1}/{maxQuestion}
                  </p>
                </div>
                <div>
                  <QuestionStep
                    key={currentStep}
                    data={currentQuestion}
                    selectedAnswers={
                      question.find((e) => e.id === currentQuestion.id)
                        ?.answers || []
                    }
                    onNext={handleNext}
                    onBack={handleBack}
                    step={step}
                  />
                </div>
              </div>
            </>
          )}
        </Paper>
      </div>
    </>
  );
};
export default Question;
