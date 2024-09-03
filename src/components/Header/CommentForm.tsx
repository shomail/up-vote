import { useState } from 'react';

const MAX_TEXT_COUNT = 150;

export const CommentForm = () => {
  const [text, setText] = useState('');

  return (
    <form className={`form ${text.length > MAX_TEXT_COUNT ? 'form--invalid' : ''}`}>
      <textarea
        id="feedback-textarea"
        placeholder="feedback"
        spellCheck={false}
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <label htmlFor="feedback-textarea">Enter your feedback here!</label>
      <div>
        <p className="u-italic">{MAX_TEXT_COUNT - text.length}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};
