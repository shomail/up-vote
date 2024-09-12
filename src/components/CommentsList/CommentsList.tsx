import { useMemo } from 'react';
import { Comment } from '.';
import { useComments } from '../../api/comments';
import { Spinner } from '../Spinner';

interface CommentsListProps {
  activeTag: string;
}

export const CommentsList = ({ activeTag }: CommentsListProps) => {
  const { data, isLoading, error } = useComments();

  const comments = useMemo(() => {
    if (data) {
      return [...data]
        .sort((a, b) => (a.id > b.id ? -1 : 1))
        .filter((comment) => (activeTag ? activeTag === comment.company : true));
    }
  }, [activeTag, data]);

  return (
    <ol className="feedback-list">
      {error && <div className="error-message">{error.message}</div>}
      {isLoading && <Spinner />}
      {comments && comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
    </ol>
  );
};
