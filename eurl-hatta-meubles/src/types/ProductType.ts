import { StaticImageData } from "next/image";

export interface ProductType {
  id?: number;
  name: string;
  description: string;
  price: number;
  img: StaticImageData;
  Date: Date;
  Instock: number;
}

export interface ImageType {
  id: number;
  name: string;
  Url: string;
}

export interface ProjectType {
  id: number;
  name: string;
  Title: string;
  location: string;
  Description: string;
  Image: string;
  time: string;
}
