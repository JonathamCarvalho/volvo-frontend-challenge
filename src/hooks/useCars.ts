// import { useEffect, useState } from "react";
// import axios from "axios";
import { Car } from "../types/car.interface";
import cars from "../../public/api/cars.json";

export function useCars(): Car[] {
  // const [cars, setCars] = useState<Car[]>([]);

  // useEffect(() => {
  //   axios.get(process.env.NEXT_PUBLIC_API_URL + "/api/cars").then((res) => {
  //     setCars(res.data);
  //   });
  // }, []);
  return cars;
}
