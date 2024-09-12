import { useComments } from '../../api/comments';

export const TagsList = () => {
  const { data, error } = useComments();

  if (error) {
    return <div className="error-message">{error.message}</div>;
  }

  if (!data) {
    return null;
  }

  const tags = data
    .map((comment) => ({ id: comment.id, company: comment.company }))
    .filter((tag, index, self) => self.findIndex((t) => t.company === tag.company) === index);

  return (
    <ul className="hashtags">
      {tags.map((tag) => (
        <li key={tag.id}>
          <button>{tag.company}</button>
        </li>
      ))}
    </ul>
  );
};
