import { Comment } from '.';

export const CommentsList = () => {
  const comments = [
    {
      id: 1,
      votes: 10,
      badge: 'G',
      companyName: 'Google',
      text: 'The best company I have ever worked for',
      days: 2,
    },
    {
      id: 2,
      votes: 5,
      badge: 'F',
      companyName: 'Facebook',
      text: 'It was a great experience',
      days: 3,
    },
  ];

  return (
    <ol className="feedback-list">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ol>
  );
};
