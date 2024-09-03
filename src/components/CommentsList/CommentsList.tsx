import { TriangleUpIcon } from '@radix-ui/react-icons';

export const CommentsList = () => {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>539</span>
        </button>
        <div>
          <p>B</p>
        </div>
        <div>
          <p>Company Name</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda blanditiis, dicta facere quisquam
            laborum sint.
          </p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  );
};
