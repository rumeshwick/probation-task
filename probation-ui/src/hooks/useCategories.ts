import { capitalize } from '../utils/utils';
import { useGroupedReviews } from './useGroupedReviews';

export const useCategories = () => {
  const { data, isFetched } = useGroupedReviews();
  if (isFetched && data) {
    return Object.keys(data).map((key) => ({ key, name: capitalize(key) }));
  }
  return [];
};
