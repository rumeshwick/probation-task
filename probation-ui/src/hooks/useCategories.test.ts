import { renderHook } from '@testing-library/react';
import { useCategories } from './useCategories';

jest.mock('./useGroupedReviews', () => ({
  useGroupedReviews: () => ({
    data: {
      country: {
        Paris: [
          [
            'b0452e2c-4cd7-4c02-a3d0-3c90bd0e8603',
            'Hilton',
            'France',
            'Paris',
            'private',
            'Amazing view',
            3,
          ],
        ],
      },
    },
    isFetched: true,
  }),
}));

describe('useCategories', () => {
  it('should return category data', async () => {
    const { result } = renderHook(() => useCategories(), {});
    expect(result.current).toEqual([{ key: 'country', name: 'Country' }]);
  });
});
