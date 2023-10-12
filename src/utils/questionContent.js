/*
    12개 질문에 대한 데이터를 보관하는 배열!

    4가지 유형에 대한 질문3개씩
    외향형, 감각형, 사고형, 판단형일때 1번
    내향형, 직관형, 감정형, 인식형일때 2번
*/
export const questionContent = [
    {
        number: 1,
        question: "좋아하는 색은?",
        answer1: "붉은색",
        answer2: "푸른색",
        type: "e"
    },
    {
        number: 2,
        question: "한국인이 뛰었거나 뛰고있는 팀이 좋다",
        answer1: "여윽시 국뽕이지",
        answer2: "국뽕팀 ㄴㄴ",
        type: "e"
    },
    {
        number: 3,
        question: "연고지 어디가 좋아?",
        answer1: "런던!",
        answer2: "시골",
        type: "e"
    },
    {
        number: 4,
        question: "돈 많이쓰는 구단주가 좋아?",
        answer1: "오일머니 굿",
        answer2: "근본 X",
        type: "s"
    },
    {
        number: 5,
        question: "둘중하나 골라봐",
        answer1: "최근에 좀못하지만 근본있는 팀",
        answer2: "근본은 없지만 최근 잘하는 팀",
        type: "s"
    },
    {
        number: 6,
        question: "감독이 대머리",
        answer1: "내친구 머머리",
        answer2: "극혐 옮을거같아",
        type: "s"
    },
    {
        number: 7,
        question: "동물좋아해?",
        answer1: "ㅇㅇ",
        answer2: "ㄴㄴ",
        type: "t"
    },
    {
        number: 8,
        question: "친구와 여행을 가기로 하고, 여행 계획은 내가 짜기로 했다면?",
        answer1: "사전에 꼼꼼하게 계획을 세운다",
        answer2: "중요한 것만 미리 정해놓고 나머지는 가서 생각한다",
        type: "t"
    },
    {
        number: 9,
        question: "오랜만에 휴가를 '하루' 얻었다. 어떻게 보낼까?",
        answer1: "집에서 여유롭게 시간을 보낸다",
        answer2: "친구들과 약속을 잡고 신나게 논다",
        type: "t"
    },
    {
        number: 10,
        question: "타로 점이 안좋게 나온 친구에게 당신이 해줄 위로의 말은?",
        answer1: "다 미신이라며 믿지말라고 한다",
        answer2: "다른 곳에 가서 다시 한 번 받아보자고 한다",
        type: "j"
    },
    {
        number: 11,
        question: "친구가 알바해 모은 돈으로 해외여행 간다고 연락이 왔다. 나의 첫번째 질문은?",
        answer1: "어떤 방법으로 어떻게 모았는지를 묻는다",
        answer2: "모은 액수와 여행 목적지를 묻는다",
        type: "j"
    },
    {
        number: 12,
        question: "집 가구를 조립하던 중 친구에게 지금 만나자는 연락이 왔다면?",
        answer1: "하던 조립을 완성하고 친구를 만나러 간다",
        answer2: "먼저 친구를 만나고와서 나머지 조립을 완성한다",
        type: "j"
    }
]