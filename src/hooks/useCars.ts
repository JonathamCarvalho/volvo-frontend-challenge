import { useEffect, useState } from "react";
import axios from "axios";
import { Car } from "../types/car.interface";

export function userCars() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/cars").then((res) => {
      setCars(res.data);
    });
  }, []);
  return cars;
}
