import './Header.css';
import TodoItem from './TodoItem';
import { memo } from 'react';

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 📅</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

const memoizedHeader = memo(Header);

// export default Header;
export default memoizedHeader;

// Header 컴포넌트의 불필요한 리랜더링을 방지하기 위해서 memo 를 사용해보자.
// ㄴ e.g. memo(최적화하고싶은컴포넌트)
// 그러면 이제 이 memo 메서드는 인수로받은 Header 컴포넌트를, 최적화가 이루어지도록 변경 후 반환(memoizedHeader)한다.
// 그리고 export 에서 일반 Header 컴포넌트를 내보내는게 아니라, 최적화가 이루어진 컴포넌트를 내보내면 된다.
// 최적화 방식은 다음과 같다.
//  ㄴ memoizedHeader 는 자신이 받는 Props가 바뀌지 않으면 리랜더링 하지 않도록 한다.
