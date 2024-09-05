import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Comment, CommentPayload } from './types';
import { apiService } from '../lib';

const createComment = async (comment: CommentPayload): Promise<Comment> => {
  const response = await apiService<Comment>({ method: 'POST', url: '/feedbacks', payload: comment });
  return response;
};

export function useCreateCommentMutation() {
  const queryClient = useQueryClient();

  return useMutation<Comment, Error, CommentPayload>({
    mutationFn: createComment,
    onMutate: async (comment) => {
      const previousComments = queryClient.getQueryData<Comment[]>(['comments']);
      queryClient.setQueryData(['comments'], (old: Comment[]) => [...(old || []), { ...comment, id: Date.now() }]);
      return { previousComments };
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['comments'] });
    },
  });
}
