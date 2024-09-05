import { Comment } from '.';
import { useComments } from '../../api/comments';

export const CommentsList = () => {
  const { data } = useComments();

  if (!data) {
    return null;
  }

  return (
    <ol className="feedback-list">
      {data.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ol>
  );
};
