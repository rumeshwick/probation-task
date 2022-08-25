import { mapToReview } from '../utils/utils';
import { useGroupedReviews } from './useGroupedReviews';

export const useReviews = () => {
  const { data, isFetched } = useGroupedReviews();
  if (isFetched && data) {
    return Object.values(Object.values(data)[0]).flat().map(mapToReview);
  }
  return [];
};
