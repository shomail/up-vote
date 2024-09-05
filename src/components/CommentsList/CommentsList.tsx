import { Comment } from '.';
import { useComments } from '../../api/comments';
import { Spinner } from '../Spinner';

export const CommentsList = () => {
  const { data, isLoading, error } = useComments();

  return (
    <ol className="feedback-list">
      {error && <div className="error-message">{error.message}</div>}
      {isLoading && <Spinner />}
      {data && data.map((comment) => <Comment key={comment.id} comment={comment} />)}
    </ol>
  );
};
