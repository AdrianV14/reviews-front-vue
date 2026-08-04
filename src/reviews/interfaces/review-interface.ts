export interface Review {
  id:          string;
  name:        string;
  rating:      number;
  description: string;
  address:     string;
  latitude:    number;
  longitude:   number;
  coverImage:  string;
  categoryId:  string;
  createdAt:   Date;
  updatedAt:   Date;
}

