import { useQuery } from '@tanstack/react-query';
import { FeedbackResponse, Comment } from './types';
import { apiService } from '../lib';

const fetchComments = async (): Promise<Comment[]> => {
  const response = await apiService<FeedbackResponse>({ method: 'GET', url: '/feedbacks' });
  return response.feedbacks;
};

export function useComments() {
  return useQuery<Comment[], Error>({
    queryKey: ['comments'],
    queryFn: fetchComments,
  });
}
