import './DiaryList.css';

import Button from './Button';
import DiaryItem from './DiaryItem';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const DiaryList = ({ data }) => {
  const nav = useNavigate();

  const [sortType, setSortType] = useState('latest');

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const getSortedData = () => {
    // toSorted() : 원본을 수정하지않고, 정렬해서 새로운 배열로 반환
    return data.toSorted((a, b) => {
      // 참고) 비교함수의 원리: 0인 경우 자리변경안함. 양수인 경우 .../ 음수인 경우 ...
      if (sortType === 'oldest') {
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    });
  };

  const sortedData = getSortedData();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value={'latest'}>최신순</option>
          <option value={'oldest'}>오래된 순</option>
        </select>
        <Button
          onClick={() => nav('/new')}
          text={'새 일기 쓰기'}
          type={'POSITIVE'}
        />
      </div>

      <div className="list_wrapper">
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
