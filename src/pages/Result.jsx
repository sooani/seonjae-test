import React from "react";
import { IoMdRefresh, IoMdShareAlt } from "react-icons/io";

const Result = () => {
  // logic

  // view
  return (
    <section className="pt-10 pb-8">
      {/* START: 로고 텍스트 */}
      <div className="text-center relative">
        <i className="absolute -left-1 -top-4 bg-[url('../public/images/icon/main-icon-wave.png')] w-[71px] h-[29px]" />{" "}
        {/* icon */}
        <div className="relative pt-8">
          <span className="flex justify-center items-end font-cafe24surround text-4xl font-bold p-1 text-stroke-1 text-stroke-black text-white relative z-10">
            <span className="block text-6xl text-mbti-deep-yellow transform -rotate-12 origin-right">
              궁
            </span>
            합{" "}
            <span className="block text-6xl text-mbti-light-pink transform rotate-12 origin-left -ml-1">
              결
            </span>
            <span className="block transform -rotate-12 origin-bottom-right">
              과
            </span>
          </span>
          {/* START: icon */}
          <i className="absolute inset-0 bg-[url('../public/images/icon/result-icon-heart.svg')] bg-no-repeat bg-hand-heart bg-center -top-6 left-1" />
          <svg
            viewBox="0 0 500 500"
            className="transform -rotate-12 absolute -top-2 right-0"
          >
            <path
              id="curve"
              d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
              className="fill-none"
            />
            <text width="500" className="text-2xl font-cafe24surround">
              <textPath xlinkHref="#curve" textAnchor="end" startOffset="100%">
                선재와 나의
              </textPath>
            </text>
          </svg>
          {/* END: icon */}
        </div>
      </div>
      {/* END: 로고 텍스트 */}
      <div className="py-4">
        {/* START: Score 컴포넌트 */}
        <div className="relative px-8">
          <img src="./images/score.svg" alt="선재와 궁합 이미지 / tnv 제공" />
          <span className="absolute flex justify-center items-center inset-0 text-5xl text-mbti-light-blue font-cafe24surround mt-3">
            90점
            <i className="absolute bloock inset-0 bg-[url('../public/images/icon/main-icon-heart-small.png')] bg-no-repeat w-[29px] h-[28px] transform scale-50 top-2/4 left-2/3" />
          </span>
        </div>
        {/* END: Score 컴포넌트 */}
      </div>
      <div className="py-4">
        {/* START: LoveIndex 컴포넌트 */}
        <div className="px-4">
          <ul>
            {/* START: LoveIndex 요소 */}
            <li className="flex gap-1 py-3 first:pt-0 last:pb-0">
              <span className="text-base min-w-20 max-w-20">애정표현력</span>
              <div className="w-full h-4 bg-mbti-light-pink rounded-r-xl overflow-hidden relative">
                <span
                  className="block h-full bg-mbti-pink transition-all"
                  style={{ width: `70%` }}
                ></span>
              </div>
            </li>
            {/* END: LoveIndex 요소 */}
            {/* START: LoveIndex 요소 */}
            <li className="flex gap-1 py-3 first:pt-0 last:pb-0">
              <span className="text-base min-w-20 max-w-20">눈치력</span>
              <div className="w-full h-4 bg-mbti-light-pink rounded-r-xl overflow-hidden relative">
                <span
                  className="block h-full bg-mbti-pink transition-all"
                  style={{ width: `50%` }}
                ></span>
              </div>
            </li>
            {/* END: LoveIndex 요소 */}
            {/* START: LoveIndex 요소 */}
            <li className="flex gap-1 py-3 first:pt-0 last:pb-0">
              <span className="text-base min-w-20 max-w-20">썸 추진력</span>
              <div className="w-full h-4 bg-mbti-light-pink rounded-r-xl overflow-hidden relative">
                <span
                  className="block h-full bg-mbti-pink transition-all"
                  style={{ width: `80%` }}
                ></span>
              </div>
            </li>
            {/* END: LoveIndex 요소 */}
            {/* START: LoveIndex 요소 */}
            <li className="flex gap-1 py-3 first:pt-0 last:pb-0">
              <span className="text-base min-w-20 max-w-20">19금력</span>
              <div className="w-full h-4 bg-mbti-light-pink rounded-r-xl overflow-hidden relative">
                <span
                  className="block h-full bg-mbti-pink transition-all"
                  style={{ width: `60%` }}
                ></span>
              </div>
            </li>
            {/* END: LoveIndex 요소 */}
          </ul>
        </div>
        {/* END: LoveIndex 컴포넌트 */}
      </div>
      <div className="py-4">
        {/* START: ResultMessage 컴포넌트 */}
        <div className="px-4">
          <div className="bg-white px-4 pb-4 rounded-md overflow-hidden border-2 border-black">
            <span className="block text-3xl font-minhye text-center py-4">
              선재랑 나는..
            </span>
            <div className="text-sm font-pretendard">
              선재의 특별함과 당신의 배려심이 만나면 아름다운 로맨스가 시작될
              거예요. 당신의 사교력으로 선재의 인맥도 넓어질 수 있어요. 사소한
              부분에서 의견 차이가 생길 수 있지만, 사랑으로 극복할 수 있을
              거예요. 당신의 든든한 지지가 선재에게 큰 힘이 될 거예요. 함께
              로맨틱한 추억을 많이 쌓을 수 있을 거예요.
            </div>
          </div>
        </div>
        {/* END: ResultMessage 컴포넌트*/}
      </div>
      <div className="py-4">
        {/* START: Button 컴포넌트 */}
        <div className="py-2">
          <button
            type="button"
            className={`flex gap-2 justify-center items-center text-mbti-blue bg-white font-cafe24surround rounded-4xl border-[6px] border-mbti-blue py-1 w-3/4 mx-auto`}
          >
            친구에게 공유하기
            <IoMdShareAlt size={32} />
          </button>
        </div>
        {/* END: Button 컴포넌트 */}
        {/* START: Button 컴포넌트 */}
        <div className="py-2">
          <button
            type="button"
            className={`flex gap-2 justify-center items-center text-white bg-mbti-blue font-cafe24surround rounded-4xl border-[6px] border-mbti-blue py-1 w-3/4 mx-auto`}
          >
            궁합 다시보기
            <IoMdRefresh size={32} />
          </button>
        </div>
        {/* END: Button 컴포넌트 */}
      </div>
    </section>
  );
};

export default Result;