import './Editor.css';

import Button from './Button';
import EmotionItem from './EmotionItem';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { emotionList } from '../util/constants';
import { getStringedDate } from '../util/get-stringed-date';

// 참고) Editor: 등록 페이지 / 수정 페이지에서 같이 쓰는 컴포넌트
const Editor = ({ initData, onSubmit }) => {
  const nav = useNavigate();

  // Date 객체를 input 태그의 value 속성으로 그냥 넣어버리면, input 태그는 Date 객체 자체는 이해를 못한다. 결과적으로 문자열로 변환해서 value 속성으로 넣어주어야 한다.
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: '',
  });

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'createdDate') {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          type="date"
          name="createdDate"
          value={getStringedDate(input.createdDate)}
          onChange={onChangeInput}
        />
      </section>

      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => {
            return (
              <EmotionItem
                key={item.emotionId}
                {...item}
                isSelected={item.emotionId === input.emotionId}
                onClick={() => {
                  // 컴포넌트를 클릭하는 경우, 이벤트 객체(e)가 자동으로 전달되지 않는다.
                  onChangeInput({
                    target: {
                      name: 'emotionId',
                      value: item.emotionId,
                    },
                  });
                }}
              />
            );
          })}
        </div>
      </section>

      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          placeholder="오늘은 어땠나요?"
          value={input.content}
          onChange={onChangeInput}
        />
      </section>

      <section className="button_section">
        <Button
          text={'취소하기'}
          onClick={() => {
            nav(-1);
          }}
        />
        <Button
          text={'작성완료'}
          type={'POSITIVE'}
          onClick={onClickSubmitButton}
        />
      </section>
    </div>
  );
};

export default Editor;
