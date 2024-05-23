"use client";
import NavBar from "@/app/components/nav-bar";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { data } from "@/lib/utils";
import PriceSlider from "../components/price-slider";
import VehicleCard from "../components/vehicle-card";
function CataloguePage() {
  const [make, setMake] = useState("All");
  const [maxPrice, setMaxPrice] = useState("");
  const filteredCars = data.filter((car) => {
    return (
      (make === "All" || car.make.toLowerCase() === make.toLowerCase()) &&
      (maxPrice === "" || parseInt(car.price) <= parseInt(maxPrice + "000"))
    );
  });

  return (
    <>
      <NavBar />
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 my-4">
        <h1 className="text-black text-xl font-semibold">Filters</h1>
        <div className="flex flex-row sm:flex-row gap-1">
          <Select value={make} onValueChange={setMake}>
            <SelectTrigger className="w-[120px] sm:w-[180px]">
              <SelectValue placeholder="Car Make" />
            </SelectTrigger>
            <SelectContent position="item-aligned">
              <SelectGroup defaultValue={"All"} className="bg-white">
                <SelectLabel>Car Make</SelectLabel>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Cadillac">Cadillac</SelectItem>
                <SelectItem value="Chevrolet">Chevrolet</SelectItem>
                <SelectItem value="Volkswagen">Volkswagen</SelectItem>
                <SelectItem value="Plymouth">Plymouth</SelectItem>
                <SelectItem value="Dodge">Dodge</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <PriceSlider
          budget={maxPrice}
          setBudget={setMaxPrice}
          defaultValue={[0]}
          min={30}
          max={120}
          step={1}
        />
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {filteredCars.map((car) => {
          return <VehicleCard key={car.image} {...car} />;
        })}
      </div>
    </>
  );
}

export default CataloguePage;
