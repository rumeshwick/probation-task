import { renderHook } from '@testing-library/react';
import { useReviews } from './useReviews';

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

describe('useReviews', () => {
  it('should return unique reviews', async () => {
    const { result } = renderHook(() => useReviews(), {});
    expect(result.current).toEqual([
      {
        city: 'Paris',
        country: 'France',
        hotel: 'Hilton',
        id: 'b0452e2c-4cd7-4c02-a3d0-3c90bd0e8603',
        score: 3,
        text: 'Amazing view',
        visit_type: 'private',
      },
    ]);
  });
});
