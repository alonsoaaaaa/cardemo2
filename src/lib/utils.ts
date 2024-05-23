import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export let data = [
  {
    model: "Barracuda",
    price: "65000",
    make: "Plymouth",
    image: "/barracuda.jpg",
    features: [
      "1969 model year",
      "Appears extensively restored",
      "High-performance muscle car",
      "Signature fastback styling",
    ],
  },
  {
    model: "Coupe DeVille",
    price: "40000",
    make: "Cadillac",
    image: "/coupe.jpg",
    features: [
      "1967 model year",
      "Convertible top",
      "Luxury full-size cruiser",
      "Distinctive mid-60s Cadillac styling",
    ],
  },
  {
    model: "Series 62 Club Coupe",
    price: "75000",
    make: "Cadillac",
    image: "/cadillac.png",
    features: [
      "1949 model year",
      "Expertly restored condition",
      "Iconic early post-war Cadillac design",
      "Upscale period interior",
    ],
  },
  {
    model: "Master Deluxe Coupe",
    price: "35000",
    make: "Chevrolet",
    image: "/nose3.jpg",
    features: [
      "1936 model year",
      "Pre-World War II production",
      "Highly styled Art Deco design",
      "Relatively rare body style",
    ],
  },
  {
    model: "Deville",
    price: "75000",
    make: "Cadillac",
    image: "/cadillac-deville.jpg",
    features: ["V8 engine", "Whitewall tires", "Bullet tail lights"],
  },
  {
    model: "Charger",
    price: "45000",
    make: "Dodge",
    image: "/DodgeCharger.jpg",
    features: ["V8 Engine", "Automatic Transmission", "Muscle Car"],
  },
  {
    model: "Beetle",
    price: "20000",
    make: "Volkswagen",
    image: "/beetle.jpg",
    features: ["Flat-Four Engine", "Manual Transmission", "Compact Car"],
  },
];
