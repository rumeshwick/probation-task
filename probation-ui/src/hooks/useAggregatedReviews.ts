import { CategoryRow } from '../types/types';
import { mapToReview } from '../utils/utils';
import { useGroupedReviews } from './useGroupedReviews';

export const useAggregatedReviews = () => {
  const { data, isFetched } = useGroupedReviews();

  let aggregatedReviews: { [key: string]: CategoryRow[] } = {};
  if (isFetched && data) {
    aggregatedReviews = Object.keys(data).reduce((prev, category) => {
      return {
        ...prev,
        [category]: Object.keys(data[category]).map((name, index) => ({
          id: index,
          name,
          reviews: data[category][name].map(mapToReview),
          noOfReviews: data[category][name].length,
        })),
      };
    }, aggregatedReviews);
  }
  return aggregatedReviews;
};
