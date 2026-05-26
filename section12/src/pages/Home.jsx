import Header from './../components/Header';
import Button from './../components/Button';
import DiaryList from './../components/DiaryList';

import { useState, useContext } from 'react';
import { DiaryStateContext } from '../App';

// 월 기준으로 필터링
const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0,
  ).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0, // 일을 0으로 하면 전월의 마지막날로 세팅된다.
    23,
    59,
    59,
  );

  return data.filter(
    (item) => item.createdDate >= beginTime && item.createdDate <= endTime,
  );
};

const Home = () => {
  const [pivotDate, setPivotDate] = useState(new Date());
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  const data = useContext(DiaryStateContext);
  const monthlyData = getMonthlyData(pivotDate, data);

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text={'<'} onClick={onDecreaseMonth} />}
        rightChild={<Button text={'>'} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
