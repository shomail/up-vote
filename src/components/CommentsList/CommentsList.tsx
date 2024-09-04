import { Comment as CommentItem } from '.';
import { useComments } from '../../api/comments';

export const CommentsList = () => {
  const { data } = useComments();

  if (!data) {
    return null;
  }

  return (
    <ol className="feedback-list">
      {data.map((item) => (
        <CommentItem key={item.id} comment={item} />
      ))}
    </ol>
  );
};
