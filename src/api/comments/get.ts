import { useQuery } from '@tanstack/react-query';

const url = 'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks';

export function useComments() {
  return useQuery<Comment[], Error>({
    queryKey: ['comments'],
    queryFn: () =>
      fetch(url)
        .then((res) => res.json())
        .then((data) => data.feedbacks),
  });
}
