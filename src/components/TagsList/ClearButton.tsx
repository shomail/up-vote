import { Cross2Icon } from '@radix-ui/react-icons';

interface ClearButtonProps {
  handleTagClick: (tag: string) => void;
}

export const ClearButton = ({ handleTagClick }: ClearButtonProps) => {
  return (
    <li>
      <button onClick={() => handleTagClick('')}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          <Cross2Icon />
          <span>Clear</span>
        </div>
      </button>
    </li>
  );
};

export default ClearButton;
