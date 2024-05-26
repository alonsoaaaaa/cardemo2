import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export let data = [
  {
    model: "Forte",
    price: "18000",
    make: "Kia",
    image: "/auto1.jpg",
    features: ["Sedan", "Compact Car", "Front-Wheel Drive"],
  },
  {
    model: "Mustang",
    price: "35000",
    make: "Ford",
    image: "/auto2.jpg",
    features: ["Coupe", "Sports Car", "Rear-Wheel Drive", "Neon Underglow"],
  },
  {
    model: "Edge",
    price: "32000",
    make: "Ford",
    image: "/auto3.jpg",
    features: ["SUV", "Crossover", "All-Wheel Drive"],
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
