import { useState } from 'react';

const MAX_TEXT_COUNT = 150;

export const CommentForm = () => {
  const [text, setText] = useState('');

  const hasValidTextLength = text.length <= MAX_TEXT_COUNT;

  return (
    <form className={`form ${hasValidTextLength ? '' : 'form--invalid'}`}>
      <textarea
        id="feedback-textarea"
        placeholder="feedback"
        spellCheck={false}
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <label htmlFor="feedback-textarea">Enter your feedback here!</label>
      <div>
        <p className="u-italic">
          {text.length} / {MAX_TEXT_COUNT}
        </p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};
