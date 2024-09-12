interface TagButtonProps {
  tag: string;
  handleClick: (tag: string) => void;
}
export const TagButton = ({ tag, handleClick }: TagButtonProps) => {
  return (
    <li>
      <button onClick={() => handleClick(tag)}>{tag}</button>
    </li>
  );
};

export default TagButton;
