export const CommentForm = () => {
  return (
    <form className="form">
      <textarea id="feedback-textarea" placeholder="feedback" spellCheck={false} />
      <label htmlFor="feedback-textarea">Enter your feedback here!</label>
      <div>
        <p className="u-italic">150</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};
