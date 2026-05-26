import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

// BrowserRouter : 브라우저의 현재 주소를 저장하고 감지하는 역할. ( BrowserRouter 에서 다양한 정보를 담고있고, 그걸 감싸고 있는 App 컴포넌트와 그 모든 자손들에게 Context 객체의 Prodiver 를 통해 해당 데이터를 공급해준다. )
// ㄴ 그래서 App 컴포넌트를 감싸주어야 한다.
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
