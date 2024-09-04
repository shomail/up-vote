import { TriangleUpIcon } from '@radix-ui/react-icons';
import { Comment as IComment } from '../../api/comments';

interface CommentProps {
  comment: IComment;
}

export const Comment = ({ comment }: CommentProps) => {
  const { upvoteCount, badgeLetter, company, text, daysAgo } = comment;
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>
      <div>
        <p>{badgeLetter}</p>
      </div>
      <div>
        <p>{company}</p>
        <p>{text}</p>
      </div>
      <p>{daysAgo}d</p>
    </li>
  );
};
