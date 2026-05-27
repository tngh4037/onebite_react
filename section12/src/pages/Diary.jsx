import { useParams, useNavigate } from 'react-router-dom'; // 현재 브라우저 경로의 URL Parameter(pathVariable) 정보
import Header from '../components/Header';
import Button from '../components/Button';
import Viewer from '../components/Viewer';
import useDiary from '../hooks/useDiary';
import { getStringedDate } from '../util/get-stringed-date';

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();

  const curDiaryItem = useDiary(params.id);
  // 최초 랜더링 시점에는 curDiaryItem 가 undefined 가 리턴됨. 이후 마운트된 후 useEffect 가 실행되고, 거기서 setCurDiaryItem 를 통해 state 를 바꾸기에 다시 리랜더링되고, 리랜더링 되는 시점에는 curDiaryItem 에 값이 있는 상태가 됨.
  if (!curDiaryItem) {
    return <div>데이터 로딩중...</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;

  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={
          <Button
            onClick={() => {
              nav(-1);
            }}
            text={'< 뒤로 가기'}
          />
        }
        rightChild={
          <Button
            onClick={() => {
              nav(`/edit/${params.id}`);
            }}
            text={'수정하기'}
          />
        }
      />

      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
