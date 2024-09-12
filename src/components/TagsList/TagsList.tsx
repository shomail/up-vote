import { useMemo } from 'react';
import { useComments } from '../../api/comments';
import ClearButton from './ClearButton';
import TagButton from './TagButton';

interface TagListProps {
  handleTagClick: (tag: string) => void;
  activeTag: string;
}

export const TagsList = ({ handleTagClick, activeTag }: TagListProps) => {
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
        <TagButton tag={tag.company} handleClick={handleTagClick} />
      ))}

      {activeTag && (
        <>
          <hr style={{ margin: '10px 0', borderColor: 'rgba(0,0,0,0.1)' }} />
          <ClearButton handleTagClick={handleTagClick} />
        </>
      )}
    </ul>
  );
};
