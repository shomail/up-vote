export interface Comment {
  id: number;
  upvoteCount: number;
  badgeLetter: string;
  company: string;
  text: string;
  daysAgo: number;
}

export interface FeedbackResponse {
  public: boolean;
  sorted: boolean;
  feedbacks: Comment[];
}

export type CommentPayload = Omit<Comment, 'id'>;
