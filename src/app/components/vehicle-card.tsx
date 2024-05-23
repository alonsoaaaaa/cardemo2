"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function VehicleCard({ model, price, image, features }: any) {
  return (
    <div className="flex flex-col w-[60%] md:w-[30%]">
      <div className="flex flex-col grow text-sm leading-5 text-black max-md:mt-10">
        <Image
          priority
          src={image}
          alt="Vehicle"
          className="self-center w-full aspect-[1.49] max-w-[300px] rounded-2xl"
          width={300}
          height={200}
        />

        <div className="flex flex-col grow justify-evenly">
          <p className="self-center font-semibold text-gray-950">{model}</p>
          <p className="self-center font-medium">
            Price $
            {price.length === 6
              ? price.slice(0, 3) + "," + price.slice(3)
              : price.slice(0, 2) + "," + price.slice(2)}
          </p>
          {features && features.length > 0 && (
            <div className="items-center">
              {features.map((feature: string) => (
                <p key={feature} className="text-center">
                  {feature}
                </p>
              ))}
            </div>
          )}
          <a href="tel:9033998014" className="self-center">
            <Button
              variant="ghost"
              className="text-blue-400 underline underline-thickness-2 underline-offset-4 underline-transparent hover:text-blue-600 pt-0"
            >
              Call
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default VehicleCard;
