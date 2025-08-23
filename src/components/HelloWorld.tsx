import React from "react";
import { Block, Button } from "vcc-ui";
import { userCars } from "../hooks/useCars";
import { CarCard } from "./CarCard";

export const HelloWorld: React.FC = () => {
  const cars = userCars();
  console.log(cars);

  return (
    <Block extend={{ padding: 20 }}>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </Block>
  );
};
