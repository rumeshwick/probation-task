export type CategoryRow = {
  id: number;
  name: string;
  reviews: Review[];
  noOfReviews: number;
};

export type ReviewRow = [
  string,
  string,
  string,
  string,
  string,
  string,
  number
];

export type Review = {
  id: string;
  hotel: string;
  country: string;
  city: string;
  visit_type: string;
  text: string;
  score: number;
};

export type ReviewResponse = {
  [key: string]: {
    [key: string]: ReviewRow[];
  };
};

export type FilterOption = {
  key: string;
  name: string;
};
