import { Button } from "@/components/ui/button";
import { QuestionValue } from "@/data/list-question";
import { cn } from "@/lib/utils";
import { useState } from "react";

type MultipleChoiceProps = {
  data: QuestionValue;
  selectedAnswers: string[];
  onNext: (selectedAnswers: string[]) => void;
  onBack: (selectedAnswers: string[]) => void;
  step: "frist" | "last" | "middle";
};
const QuestionStep = ({
  data,
  selectedAnswers,
  onBack,
  onNext,
  step,
}: MultipleChoiceProps) => {
  const [answerIds, setAnswerIds] = useState(selectedAnswers);

  return (
    <>
      <div className="flex flex-col h-full justify-between">
        <p className="mt-3">{data?.question}</p>
        <div className="mt-6 flex flex-col gap-3">
          {data.answers.map((answer) => {
            const select = answerIds?.includes(answer.id);
            return (
              <>
                <div
                  key={answer.id}
                  className={cn(
                    "rounded-[16px] px-6 py-4 border border-gray-200 cursor-pointer hover:bg-primary-50",
                    select && "bg-primary-50 text-primary border-primary-200"
                  )}
                  onClick={() => {
                    const newAnswerIds = select
                      ? answerIds?.filter((id) => id !== answer.id)
                      : [...(answerIds || []), answer.id];
                    setAnswerIds(newAnswerIds);
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
              onClick={() => onBack(answerIds)}
            >
              Back
            </Button>
          ) : (
            <div />
          )}
          <Button
            type="submit"
            onClick={() => onNext(answerIds)}
            disabled={!answerIds || answerIds.length === 0}
          >
            {step === "last" ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default QuestionStep;
