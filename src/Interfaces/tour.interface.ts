interface ITour {
  name: string;
  durationHours: number;
  ratingAverage: number;
  ratingQuantity: number;
  price: number;
  image: string;
  images: string[];
  createAt: Date;
  startDates: Date[];
  startLocation: string;
  location: string[];
  slug: string;
}
