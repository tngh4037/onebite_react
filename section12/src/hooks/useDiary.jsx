import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { DiaryStateContext } from '../App';

const useDiary = (id) => {
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id),
    );

    if (!currentDiaryItem) {
      window.alert('존재하지 않는 일기입니다.');
      nav('/', { replace: true }); // nav() 함수같은 경우는 컴포넌트가 마운트 된 이후에 동작한다.   적어도 랜더링은 다 끝났을때(컴포넌트가 마운트 된 이후에) 호출해라. You should call navigate() in a React.useEffect(), not when your component is first rendered.
    }

    setCurDiaryItem(currentDiaryItem);
  }, [id]);

  return curDiaryItem;
};

export default useDiary;
