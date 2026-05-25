import { useEffect } from 'react';

const Even = () => {
  // [ 3. 언마운트: 죽음 ]
  // - Even 컴포넌트가 언마운트 되는 시점 제어
  // useEffect 의 콜백함수가 반환하는 함수 = 클린업 or 정리함수
  // 정리함수는 useEffect 가 끝날 때 실행된다. ( 모르겠으면 외우자 그냥 )
  useEffect(() => {
    return () => {
      console.log('unmount');
    };
  }, []);

  return <div>짝수입니다</div>;
};

export default Even;
