import { ProductType } from "@/types/ProductType";
import testImage from "/public/assets/AboutUs01.jpg";

export const offersArray: ProductType[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 99.99,
    img: testImage,
    Date: new Date("2024-01-15"),
    Instock: 20,
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Feature-packed smartwatch with heart rate monitor and GPS.",
    price: 149.99,
    img: testImage,
    Date: new Date("2024-02-20"),
    Instock: 15,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with excellent sound quality.",
    price: 59.99,
    img: testImage,
    Date: new Date("2024-03-10"),
    Instock: 30,
  },
  {
    id: 4,
    name: "Gaming Mouse",
    description: "Ergonomic gaming mouse with customizable buttons.",
    price: 49.99,
    img: testImage,
    Date: new Date("2024-04-05"),
    Instock: 25,
  },
  {
    id: 5,
    name: "Fitness Tracker",
    description: "Compact fitness tracker with activity and sleep tracking.",
    price: 39.99,
    img: testImage,
    Date: new Date("2024-05-15"),
    Instock: 40,
  },
  {
    id: 6,
    name: "Laptop Stand",
    description: "Adjustable laptop stand for comfortable viewing angles.",
    price: 29.99,
    img: testImage,
    Date: new Date("2024-06-25"),
    Instock: 50,
  },
];
