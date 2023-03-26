import React, { useRef, useState } from "react";
import { add, format, sub } from "date-fns";
import { format as timezoneFormat } from "date-fns-tz";
import addWeeks from "date-fns/addWeeks";
import { ko } from "date-fns/locale";
import differenceInHours from "date-fns/differenceInHours";

export default function DateFNSExample() {
  const birthDayRef = useRef(null);
  const [day, setDay] = useState("");
  const handleBirthDayChange = (e) => {
    setDay(format(new Date(e.target.value), "EEEE", { locale: ko }));
  };

  const dataFnsDate = new Date();
  const newDateFnsDate = add(dataFnsDate, { weeks: 1 });
  const newDateFnsDate2 = addWeeks(newDateFnsDate, 1);

  return (
    <div>
      <h1>Date-fns</h1>
      <div>Immutable</div>
      <div>
        {format(dataFnsDate, "yyyy-MM-dd")}
        <br />
        {format(newDateFnsDate, "yyyy-MM-dd")}
        <br />
        {format(newDateFnsDate2, "yyyy-MM-dd")}
        <br />
      </div>
      <div>
        <br />
        Summer Time (New-york)
        <div>
          2018년 3월 10일 13시에 하루 더하기:
          {timezoneFormat(
            add(new Date("2018-03-10 09:00:00"), { days: 1 }),
            "yyyy-MM-dd HH:mm:ssXXX",
            { timeZone: "America/New_York" }
          )}
        </div>
        <div>
          2018년 3월 10일 13시에 24시간 더하기:
          {timezoneFormat(
            add(new Date("2018-03-10 09:00:00"), { hours: 24 }),
            "yyyy-MM-dd HH:mm:ssXXX",
            { timeZone: "America/New_York" }
          )}
        </div>
        <br />
        Leap Year (Korea)
        <div>
          2017년 1월 1일에 1년 빼기:
          {format(sub(new Date("2017-01-01"), { years: 1 }), "yyyy-MM-dd")}
        </div>
        <div>
          2017년 1월 1일에 365일 빼기:
          {format(sub(new Date("2017-01-01"), { days: 365 }), "yyyy-MM-dd")}
        </div>
        <br />
        <div>
          <div>한국어로 표기하기 07-17-2021을 2021-07-17로 표기</div>
          {format(new Date("07-17-2021"), "yyyy년 MM월 dd일")}
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
              {differenceInHours(
                new Date("2021-07-17 03:00"),
                new Date("2021-07-18 02:00")
              ) + "시간"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
