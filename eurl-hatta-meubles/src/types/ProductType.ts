import { StaticImageData } from "next/image";

export interface ProductType {
  id?: number;
  name: string;
  description: string;
  img: StaticImageData;
}
