import ImageResult from "@/assets/Speaking test.svg?react";

const QuestionFinal = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-14 h-full">
        <p className="text-3xl font-semibold">Great Job!</p>
        <div className="text-center">
          <p className="text-2xl font-semibold">You have completed the test.</p>
          <p className="text-2xl font-semibold">
            Your test result will be sent to your registered email.
          </p>
        </div>
        <ImageResult />
      </div>
    </>
  );
};
export default QuestionFinal;
