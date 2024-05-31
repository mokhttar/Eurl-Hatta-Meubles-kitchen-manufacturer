import { Kitchens } from "@/types";
import MainKitchen from "../assets/lotus-design-n-print-ik9WP2V8Vas-unsplash.jpg";
import Test from "../assets/jason-briscoe-GliaHAJ3_5A-unsplash.jpg";
import Image from "next/image";
export const KitchenArray: Kitchens[] = [
  {
    id: 1,
    Name: "kitchen one",
    Image: MainKitchen,
  },
  {
    id: 2,
    Name: "kitchen Two",
    Image: Test,
  },
];
