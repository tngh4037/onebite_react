import { useParams, useSearchParams } from 'react-router-dom'; // 현재 브라우저 경로의 URL Parameter(pathVariable) 정보

const Diary = () => {
  const params = useParams();
  console.log(params); // params 의 id 프로퍼티에 URL Parameter가 있음.

  // /diary/3?name=kim
  const [parameters, setParameters] = useSearchParams(); // setParameters 함수를 통해 현재 쿼리스트링의 값을 수정할 수 있다.
  console.log(parameters.get('name')); // kim

  return <div>{params.id}번 일기입니다.</div>;
};

export default Diary;
