export type QuestionValue = {
  id: string;
  question: string;
  answers: AnswerValue[];
};

export type AnswerValue = {
  id: string;
  value: string;
};

export type Questions = QuestionValue[];

export const listQuestion: Questions = [
  {
    id: "question-1",
    question: "What does your dad do?",
    answers: [
      {
        id: "aswer-1",
        value: "He didn’t do that.",
      },
      {
        id: "aswer-2",
        value: "He often exercises.",
      },
      {
        id: "aswer-3",
        value: "He is a teacher.",
      },
      {
        id: "aswer-4",
        value: "He is going home.",
      },
      {
        id: "aswer-5",
        value: "Not sure.",
      },
    ],
  },
  {
    id: "question-2",
    question: "How did you find the meal?",
    answers: [
      {
        id: "aswer-2-1",
        value: "It was not far from here.",
      },
      {
        id: "aswer-2-2",
        value: "We asked for it.",
      },
    ],
  },
];
