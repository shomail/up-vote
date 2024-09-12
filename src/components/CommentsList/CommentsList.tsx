import { Comment } from '.';
import { useComments } from '../../api/comments';
import { Spinner } from '../Spinner';

interface CommentsListProps {
  activeTagId: number | null;
}

export const CommentsList = ({ activeTagId }: CommentsListProps) => {
  const { data, isLoading, error } = useComments();

  return (
    <ol className="feedback-list">
      {error && <div className="error-message">{error.message}</div>}
      {isLoading && <Spinner />}
      {data &&
        [...data]
          .sort((a, b) => (a.id > b.id ? -1 : 1))
          .filter((comment) => activeTagId === null || comment.id === activeTagId)
          .map((comment) => <Comment key={comment.id} comment={comment} />)}
    </ol>
  );
};
