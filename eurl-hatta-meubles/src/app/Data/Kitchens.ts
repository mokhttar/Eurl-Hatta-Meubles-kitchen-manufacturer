import { ProductType } from "@/types/ProductType";
import TestImage from "/public/assets/kitchen01.jpg";

export const KitchensArray: ProductType[] = [
  {
    id: 1,
    name: "Kitchen01",
    description: "some bulshit here",
    price: 1000,
    Date: new Date(), //some random  date only for test {remove it in production}
    img: TestImage,
    Instock: 10,
  },
  {
    id: 1,
    name: "Kitchen01",
    description: "some bulshit here",
    price: 1000,
    Date: new Date(), //some random  date only for test {remove it in production}
    img: TestImage,
    Instock: 10,
  },
];
