import { Review, ReviewRow } from '../types/types';

export const capitalize = (text: string) => {
  return text
    .replace('_', ' ')
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(' ');
};

export const mapToReview = (row: ReviewRow): Review => {
  return {
    id: row[0],
    hotel: row[1],
    country: row[2],
    city: row[3],
    visit_type: row[4],
    text: row[5],
    score: row[6],
  };
};

export const getUniqueScores = (reviews: Review[]) => {
  return reviews
    .map((row) => row.score.toString())
    .filter((item, i, ar) => ar.indexOf(item) === i)
    .sort()
    .map((row) => ({ key: row, name: row }));
};
