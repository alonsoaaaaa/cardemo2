import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export let data = [
  {
    model: "Golf",
    price: "15000",
    make: "Volkswagen",
    image: "/car1.jpg",
    features: ["Hatchback", "Compact Car", "Front-Wheel Drive"],
  },
  {
    model: "Edge",
    price: "30000",
    make: "Ford",
    image: "/car2.jpg",
    features: ["Crossover SUV", "All-Wheel Drive", "Spacious Interior"],
  },
  {
    model: "Altima",
    price: "25000",
    make: "Nissan",
    image: "/car3.jpg",
    features: ["Midsize Sedan", "Fuel Efficient", "Front-Wheel Drive"],
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
