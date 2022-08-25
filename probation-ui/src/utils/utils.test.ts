import { ReviewRow } from '../types/types';
import { capitalize, mapToReview } from './utils';

describe('Utils', () => {
  it('should capitalize first letter of each word', async () => {
    expect(capitalize('test_word')).toEqual('Test Word');
  });

  it('should map row object to Review Object', async () => {
    const row: ReviewRow = [
      '6451fd83-722e-4ff6-8429-13f13193c93b',
      'Hilton',
      'Romania',
      'Bucharest',
      'private',
      'Loved the bed!',
      4,
    ];
    expect(mapToReview(row)).toEqual({
      city: 'Bucharest',
      country: 'Romania',
      hotel: 'Hilton',
      id: '6451fd83-722e-4ff6-8429-13f13193c93b',
      score: 4,
      text: 'Loved the bed!',
      visit_type: 'private',
    });
  });
});
