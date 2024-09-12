import { useMemo } from 'react';
import { useComments } from '../../api/comments';

interface TagListProps {
  handleTagClick: (tag: string) => void;
}

export const TagsList = ({ handleTagClick }: TagListProps) => {
  const { data, error } = useComments();

  const tags = useMemo(() => {
    if (!data) {
      return [];
    }
    return [...data]
      .map((comment) => ({ id: comment.id, company: comment.company }))
      .filter((tag, index, self) => self.findIndex((t) => t.company === tag.company) === index);
  }, [data]);

  if (error) {
    return <div className="error-message">{error.message}</div>;
  }

  return (
    <ul className="hashtags">
      {tags.map((tag) => (
        <li key={tag.id}>
          <button onClick={() => handleTagClick(tag.company)}>{tag.company}</button>
        </li>
      ))}
    </ul>
  );
};
