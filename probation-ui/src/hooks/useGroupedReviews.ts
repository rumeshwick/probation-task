import { useQuery } from '@tanstack/react-query';
import { ReviewResponse } from '../types/types';

export const useGroupedReviews = () => {
  return useQuery(['reviews'], async (): Promise<ReviewResponse> => {
    return fetch('http://0.0.0.0:8888/reviews').then((res) => res.json());
  });
};
