export const RULES = [
  {
    name: "Aces",
    explain: "1이 나온 주사위의 총합",
    score: "최저 0점, 최대 5점",
  },
  {
    name: "Twos(Deuces)",
    explain: "2가 나온 주사위의 총합",
    score: "최저 0점, 최대 10점",
  },
  {
    name: "Threes",
    explain: "3이 나온 주사위의 총합",
    score: "최저 0점, 최대 15점",
  },
  {
    name: "Fours",
    explain: "4가 나온 주사위의 총합",
    score: "최저 0점, 최대 20점",
  },
  {
    name: "Fives",
    explain: "5가 나온 주사위의 총합",
    score: "최저 0점, 최대 25점",
  },
  {
    name: "Sixes",
    explain: "6이 나온 주사위의 총합",
    score: "최저 0점, 최대 30점",
  },
  {
    name: "Choice",
    explain: "조건 없이, 5개 주사위의 총합",
    score: "최저 0점, 최대 30점",
  },
  {
    name: "4 of a Kind",
    explain:
      "동일한 주사위 눈이 4개 이상일 경우에 5개 주사위의 총합. 그 외에는 0점",
    score: "최대 30점",
  },
  {
    name: "Full House",
    explain:
      "동일한 주사위 눈이 각각 3개와 2개로 구성되는 경우에 5개 주사위의 총합. 그 외에는 0점",
    score: "최대 28점",
  },
  {
    name: "Small Straight",
    explain:
      "연속해서 이어지는 주사위 눈이 4개 이상일 경우 고정 점수. 그 외에는 0점",
    score: "15점 고정",
  },
  {
    name: "Large Straight",
    explain:
      "연속해서 이어지는 주사위 눈이 5개일 경우 고정 점수. 그 외에는 0점",
    score: "30점 고정",
  },
  {
    name: "Yacht",
    explain: "5개 주사위의 눈이 모두 동일할 경우 고정 점수. 그 외에는 0점",
    score: "50점 고정",
  },
];
