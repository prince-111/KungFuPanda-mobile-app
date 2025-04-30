export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  colors: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 999.99,
    description: "High-quality wireless headphones with noise cancellation",
    image: "https://m.media-amazon.com/images/I/51O3nglyJQL._SL1200_.jpg",
    rating: 4.5,
    reviews: 120,
    colors: ["black", "white", "blue"],
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 1999.99,
    description: "Latest smart watch with health monitoring",
    image: "https://m.media-amazon.com/images/I/71QoSMBhfVL._SX679_.jpg",
    rating: 4.2,
    reviews: 85,
    colors: ["black", "silver"],
  },
  {
    id: 3,
    name: "iPhone 16 Pro Max 512 GB: 5G Mobile Phone with Camera - Space Gray",
    price: 109990,
    description: "High-quality wireless headphones with noise cancellation",
    image:
      "https://m.media-amazon.com/images/I/31qMi11K9PL._SY445_SX342_QL70_FMwebp_.jpg",
    rating: 4.5,
    reviews: 120,
    colors: ["black", "white", "blue"],
  },
  {
    id: 4,
    name: "Apple 2024 MacBook Pro Laptop with M4 Max chip with 14‑core CPU and 32‑core GPU",
    price: 309990,
    description: "Latest smart watch with health monitoring",
    image:
      "https://m.media-amazon.com/images/I/31ogOjiaPdL._SY445_SX342_QL70_FMwebp_.jpg",
    rating: 4.2,
    reviews: 85,
    colors: ["black", "silver"],
  },
];
