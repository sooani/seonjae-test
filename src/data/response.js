export const mbtiQuestionList = [
    {
        id: 1,
        step: 1,
        nestStep: 2,
        questionType: "EI",
        questionTypeStep: 1,
        firstType: "E",
        lastType: "I",
        questionText: "선재가 이클립스 공연에 당신을 초대한다면?"
    },
    {
        id: 2,
        step: 2,
        nestStep: 3,
        questionType: "EI",
        questionTypeStep: 1,
        firstType: "E",
        lastType: "I",
        questionText: "사랑하는 사람에게 하고싶은 말은?"
    },
    {
        id: 3,
        step: 3,
        nestStep: 4,
        questionType: "NS",
        questionTypeStep: 2,
        firstType: "S",
        lastType: "N",
        questionText: "임솔처럼 과거로 돌아갈 수 있다면?"
    },{
        id: 4,
        step: 4,
        nextStep: 5,
        questionType: "TF",
        questionTypeStep: 3,
        firstType: "F",
        lastType: "T",
        questionText: "사랑하는 사람을 위해 목숨을 걸 수 있나요?",
    },
    {
        id: 5,
        step: 5,
        nextStep: 6,
        questionType: "PJ",
        questionTypeStep: 4,
        firstType: "J",
        lastType: "P",
        questionText: "중요한 약속이 있는 날, 갑작스럽게 선재가 집으로 초대한다면?",
    },
    {
        id: 6,
        step: 6,
        nextStep: 7,
        questionType: "NS",
        questionTypeStep: 2,
        firstType: "S",
        lastType: "N",
        questionText: "톱스타와 데이트 중, 사람들이 몰려들어 사진을 찍기 시작한다면?",
    },
    {
        id: 7,
        step: 7,
        nextStep: 8,
        questionType: "TF",
        questionTypeStep: 3,
        firstType: "F",
        lastType: "T",
        questionText: "사랑하는 사람을 구하기 위해 과거로 간다면?",
    },
    {
        id: 8,
        step: 8,
        nextStep: 9,
        questionType: "NS",
        questionTypeStep: 2,
        firstType: "S",
        lastType: "N",
        questionText: "선재와 함께 타임캡슐을 묻는다면, 무엇을 넣고 싶은가요?",
    },
    {
        id: 9,
        step: 9,
        nextStep: 10,
        questionType: "TF",
        questionTypeStep: 3,
        firstType: "F",
        lastType: "T",
        questionText: "류선재의 갑작스러운 죽음을 접했을 때, 당신의 반응은?",
    },
    {
        id: 10,
        step: 10,
        nextStep: 11,
        questionType: "EI",
        questionTypeStep: 1,
        firstType: "E",
        lastType: "I",
        questionText: "사랑하는 사람에게 먼저 고백할 수 있나요?",
    },
    {
        id: 11,
        step: 11,
        nextStep: 12,
        questionType: "PJ",
        questionTypeStep: 4,
        firstType: "J",
        lastType: "P",
        questionText: "선재를 구하기 위해 과거로 떠날 수 있다면?",
    },
    {
        id: 12,
        step: 12,
        nextStep: 0,
        questionType: "PJ",
        questionTypeStep: 4,
        firstType: "J",
        lastType: "P",
        questionText: "과거에서 만난 선재가 당신에게 호감을 보인다면?",
    },
];

export const mbtiAnswerList = [
    {
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
    },
    {
        id: 2,
        questionStep: 2,
        questionNextStep: 3,
        questionType: "EI",
        answerList: [
        {
            code: 0,
            type: "E",
            text: "네가 내 별이다. 너라는 존재 자체가 나에게 큰 의미야",
        },
        {
            code: 1,
            type: "I",
            text: "우리 서로에게 좋은 영향을 주는 관계가 되자",
        },
    ],
},
        {
            id: 3,
            questionStep: 3,
            questionNextStep: 4,
            questionType: "NS",
            answerList: [
            {
                code: 0,
                type: "N",
                text: "그 전에 현재의 문제를 해결하는 게 먼저야",
            },
            {
                code: 1,
                type: "S",
                text: "과거로 돌아가면 미래를 바꿀 수 있을지도 몰라!",
            },
        ],
    },
    {
    id: 4,
    questionStep: 4,
    questionNextStep: 5,
    questionType: "TF",
    answerList: [
    {
        code: 0,
        type: "F",
        text: "너 구하고 죽는 거면 난 괜찮아. 상관없어",
    },
    {
        code: 1,
        type: "T",
        text: "사랑은 중요하지만, 목숨 거는 건 오바야",
    },
    ],
},
{
    id: 5,
    questionStep: 5,
    questionNextStep: 6,
    questionType: "PJ",
    answerList: [
    {
        code: 0,
        type: "J",
        text: "선약이 있으니 어쩔 수 없지",
    },
    {
        code: 1,
        type: "P",
        text: "무조건 가야지~ 무슨 생각을 해",
    },
    ],
},
{
    id: 6,
    questionStep: 6,
    questionNextStep: 7,
    questionType: "NS",
    answerList: [
    {
        code: 0,
        type: "S",
        text: "사람들 시선이 너무 부담스러워ㅠㅠ",
    },
    {
        code: 1,
        type: "N",
        text: "이런 상황도 우리 사랑의 한 페이지가 될 거야",
    },
    ],
},
{
    id: 7,
    questionStep: 7,
    questionNextStep: 8,
    questionType: "TF",
    answerList: [
    {
        code: 0,
        type: "F",
        text: "사랑하는 사람을 위해서라면 기꺼이 내 모든 것을 줄 수 있어",
    },
    {
        code: 1,
        type: "T",
        text: "과거로 가는 것이 최선의 방법일까?",
    },
    ],
},
{
    id: 8,
    questionStep: 8,
    questionNextStep: 9,
    questionType: "NS",
    answerList: [
    {
        code: 0,
        type: "S",
        text: "지금의 중요한 물건이나 사진들을 넣고 이순간을 기록하고 싶어",
    },
    {
        code: 1,
        type: "N",
        text: "미래에 대한 편지나 꿈을 담은 메모를 넣고 싶어",
    },
    ],
},
{
    id: 9,
    questionStep: 9,
    questionNextStep: 10,
    questionType: "TF",
    answerList: [
    {
        code: 0,
        type: "F",
        text: "믿을 수 없어... 너무 슬프고 충격적이야",
    },
    {
        code: 1,
        type: "T",
        text: "선재의 죽음 뒤에는 분명 숨겨진 이유가 있을 거야",
    },
    ],
},
{
    id: 10,
    questionStep: 10,
    questionNextStep: 11,
    questionType: "EI",
    answerList: [
    {
        code: 0,
        type: "E",
        text: "선재야!널 좋아해. 이제 내 맘 다 말할래💕",
    },
    {
        code: 1,
        type: "I",
        text: "선재가 내 마음을 알아주지 않을까?",
    },
    ],
},
{
    id: 11,
    questionStep: 11,
    questionNextStep: 12,
    questionType: "PJ",
    answerList: [
    {
        code: 0,
        type: "J",
        text: "과거로 가기 전에 뭘 해야 할지 리스트를 만들자",
    },
    {
        code: 1,
        type: "P",
        text: "계획은 과거에서 그때그때 세우고 일단 출발하자!",
    },
    ],
},
{
    id: 12,
    questionStep: 12,
    questionNextStep: 0,
    questionType: "PJ",
    answerList: [
    {
        code: 0,
        type: "J",
        text: "고백하기 전에 우리의 관계를 더 확실히 하고 싶어",
    },
    {
        code: 1,
        type: "P",
        text: "너무 설레자낭~💗 이미 사랑에 빠져버림",
    },
    ],
},
];