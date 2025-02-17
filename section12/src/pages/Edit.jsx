import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { DiaryDispatchContext } from '../App';
import useDiary from '../hooks/useDiary';
import usePageTitle from '../hooks/usePageTitle';

import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  const currentDiaryItem = useDiary(params.id);
  usePageTitle(`${params.id}번 일기 수정`);

  const onClickDelete = () => {
    if (window.confirm('일기를 정말 삭제할까요? 다시 복구되지 않아요!')) {
      onDelete(params.id);
      nav('/', { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm('일기를 정말 수정할까요?')) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      nav('/', { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={'일기 수정하기'}
        leftChild={<Button onClick={() => nav(-1)} text={'< 뒤로 가기'} />}
        rightChild={
          <Button onClick={onClickDelete} text={'삭제하기'} type={'NEGATIVE'} />
        }
      />
      <Editor onSubmit={onSubmit} initData={currentDiaryItem} />
    </div>
  );
};

export default Edit;
