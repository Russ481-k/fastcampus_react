import React, { useRef, useState } from "react";
import moment from "moment-timezone";
import "moment/locale/ko";
export default function MomentExample() {
  const momentDate = moment();
  const newMoment = momentDate.add(1, "week");
  const cloneNewMomentDate = newMoment.clone().add(1, "week");

  const birthDayRef = useRef(null);
  const [day, setDay] = useState("");
  const handleBirthDayChange = (e) => {
    setDay(moment(e.target.value, "YYYY-MM-DD").format("dddd"));
  };
  return (
    <div>
      <h1>Moment</h1>
      <div>Immutable</div>
      <div>
        {momentDate.format()}
        <br />
        {newMoment.format()}
        <br />
        {cloneNewMomentDate.format()}
        <br />
      </div>
      <div>
        <br />
        Summer Time (New-york)
        <div>
          2018년 3월 10일 13시에 하루 더하기:
          {moment
            .tz("2018-03-10 13:00:00", "America/New_york")
            .add(1, "day")
            .format()}
        </div>
        <div>
          2018년 3월 10일 13시에 24시간 더하기:
          {moment
            .tz("2018-03-10 13:00:00", "America/New_york")
            .add(24, "hour")
            .format()}
        </div>
        <br />
        Leap Year (Korea)
        <div>
          2017년 1월 1일에 1년 빼기:
          {moment("2017-01-01").subtract(1, "year").format()}
        </div>
        <div>
          2017년 1월 1일에 365일 빼기:
          {moment("2017-01-01").subtract(365, "day").format()}
        </div>
        <br />
        <div>
          <div>한국어로 표기하기 07-17-2021을 2021-07-17로 표기</div>
          {moment("07-17-2021").format("YYYY년 MM월 DD일")}
          <br />
          <div>두 날짜를 비교</div>
          <div>
            <input
              type="date"
              ref={birthDayRef}
              onChange={handleBirthDayChange}
            />
            <div>무슨 요일이었을까?</div>
            <div>{day}</div>
          </div>
          <br />
          <div>두 날짜를 비교</div>
          <div>2021-07-17 03:00와 2021-07-18 02:00는 몇 시간 차이인가?</div>
          <div>
            <div>
              {moment("2021-07-17 03:00").diff(
                moment("2021-07-18 02:00"),
                "hours"
              ) + "시간"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
