export const initialMbtiQuestion = {
    id: 1,
    step: 1,
    nestStep: 2,
    questionType: "EI",
    firstType: "E",
    lastType: "I",
    questionText: "선재가 이클립스 공연에 당신을 초대한다면?",

};

export const initialMbtiAnswer = {
    id: 1,
    questionStep: 1,
    questionNextStep: 2,
    questionType: "EI",
    answerList: [
    {
        code: 0,
        type: "E",
        text: "꺄아! 당연히 가서 떼창도 하고 다른 팬들이랑 같이 즐겨야지!",
    },
    {
        code: 1,
        type: "I",
        text: "선재가 날 초대해 주다니..오로지 선재에게만 집중하고 싶어",
    },
    ],
};