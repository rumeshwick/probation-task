import { renderHook } from '@testing-library/react';
import { useAggregatedReviews } from './useAggregatedReviews';

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

describe('useAggregatedReviews', () => {
  it('should return aggregated reviews', async () => {
    const { result } = renderHook(() => useAggregatedReviews(), {});
    expect(result.current).toEqual({
      country: [
        {
          id: 0,
          name: 'Paris',
          noOfReviews: 1,
          reviews: [
            {
              city: 'Paris',
              country: 'France',
              hotel: 'Hilton',
              id: 'b0452e2c-4cd7-4c02-a3d0-3c90bd0e8603',
              score: 3,
              text: 'Amazing view',
              visit_type: 'private',
            },
          ],
        },
      ],
    });
  });
});
