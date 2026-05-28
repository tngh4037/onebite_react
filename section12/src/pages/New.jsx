import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { DiaryDispatchContext } from '../App';
import usePageTitle from './../hooks/usePageTitle';

const New = () => {
  const nav = useNavigate();

  const { onCreate } = useContext(DiaryDispatchContext);
  usePageTitle('새 일기 쓰기');

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    nav('/', { replace: true }); // 페이지를 루트로 이동할건데, 현재페이지를 뒤로가기로 오는것을 방지하는 옵션을 넣어주겠다. (그러면 / 경로에서 뒤로가기 클릭시 현재페이지로 안옴)
  };

  return (
    <div>
      <Header
        title={'새 일기 쓰기'}
        leftChild={<Button text={'< 뒤로 가기'} onClick={() => nav(-1)} />}
      />

      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
