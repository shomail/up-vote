import { useState } from 'react';
import { useCreateCommentMutation } from '../../api/comments';

const MAX_TEXT_COUNT = 150;

export const CommentForm = () => {
  const [text, setText] = useState('');
  const createComment = useCreateCommentMutation();

  const hasValidTextLength = text.length <= MAX_TEXT_COUNT;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!hasValidTextLength && text.length > 0) {
      return;
    }

    const companyName =
      text
        .split(' ')
        .find((word) => word.startsWith('#'))
        ?.substring(1) || '';

    createComment.mutate({
      text,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
      company: companyName,
      daysAgo: 0,
      upvoteCount: 0,
    });

    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className={`form ${hasValidTextLength ? '' : 'form--invalid'}`}>
      <textarea
        id="feedback-textarea"
        placeholder="feedback"
        spellCheck={false}
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <label htmlFor="feedback-textarea">Enter your feedback here!</label>
      <div>
        <p className={`u-italic ${!hasValidTextLength ? 'text-invalid' : ''}`}>
          {text.length} / {MAX_TEXT_COUNT}
        </p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};
