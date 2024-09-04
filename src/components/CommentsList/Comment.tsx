import { TriangleUpIcon } from '@radix-ui/react-icons';

interface Comment {
  id: number;
  votes: number;
  badge: string;
  companyName: string;
  text: string;
  days: number;
}

interface CommentProps {
  comment: Comment;
}

export const Comment = ({ comment }: CommentProps) => {
  const { votes, badge, companyName, text, days } = comment;
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{votes}</span>
      </button>
      <div>
        <p>{badge}</p>
      </div>
      <div>
        <p>{companyName}</p>
        <p>{text}</p>
      </div>
      <p>{days}d</p>
    </li>
  );
};
