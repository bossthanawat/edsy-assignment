import { Button } from "@/components/ui/button";
import { QuestionValue } from "@/data/list-question";
import { cn } from "@/lib/utils";
import { useState } from "react";

type MultipleChoiceProps = {
  data: QuestionValue;
  selectedAnswers: string;
  onNext: (selectedAnswers: string) => void;
  onBack: (selectedAnswers: string) => void;
  onSubmit: (selectedAnswers: string) => void;
  step: "frist" | "last" | "middle";
};
const QuestionStep = ({
  data,
  selectedAnswers,
  onBack,
  onNext,
  onSubmit,
  step,
}: MultipleChoiceProps) => {
  const [answerId, setAnswerId] = useState(selectedAnswers);

  return (
    <>
      <div className="flex flex-col h-full justify-between">
        <p className="mt-3">{data?.question}</p>
        <div className="mt-6 flex flex-col gap-3">
          {data.answers.map((answer) => {
            const select = answerId?.includes(answer.id);
            return (
              <>
                <div
                  key={answer.id}
                  className={cn(
                    "rounded-[16px] px-6 py-4 border border-gray-200 cursor-pointer hover:bg-primary-50",
                    select && "bg-primary-50 text-primary border-primary-200"
                  )}
                  onClick={() => {
                    setAnswerId(answer.id);
                  }}
                >
                  <div className="font-medium">{answer.value}</div>
                </div>
              </>
            );
          })}
        </div>
        <div className="flex justify-between mt-4 pt-4 border-t-[1px]">
          {step !== "frist" ? (
            <Button
              type="button"
              variant={"outline"}
              onClick={() => onBack(answerId)}
            >
              Back
            </Button>
          ) : (
            <div />
          )}
          {step !== "last" && (
            <Button onClick={() => onNext(answerId)} disabled={!answerId}>
              Next
            </Button>
          )}
          {step === "last" && (
            <Button onClick={() => onSubmit(answerId)} disabled={!answerId}>
              Submit
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default QuestionStep;
