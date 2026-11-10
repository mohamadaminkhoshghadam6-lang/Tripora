
export type Destination = {
  id: number;
  name: string;
  country: string;
  description: string;
  image: string;
  price: number;
};

export type Hotel = {
  id: number;
  name: string;
  location: string;
  rating: number;
  price: number;
  image: string;
};

export type Tour = {
  id: number;
  title: string;
  location: string;
  duration: string;
  price: number;
  image: string;
};
