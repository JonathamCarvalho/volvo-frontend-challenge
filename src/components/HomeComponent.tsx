import React, { useState } from "react";
import { userCars } from "../hooks/useCars";
import { CarCard } from "./CarCard";
import styles from "../../public/css/home.module.css";
import { Text } from "vcc-ui";
import { Spacer } from "./Spacer";
import PaginationDesktop from "./PaginationDesktop";
import PaginationMobile from "./PaginationMobile";

export const HomeCompent: React.FC = () => {
  const cars = userCars();
  const [selected, setSelected] = useState(0);

  const onClickLeft = () => {
    let CardList = document.getElementById("card-list");
    let card = CardList?.firstElementChild;
    let cardSize = (card?.clientWidth ?? 0) + 24;
    let scrollSize = CardList?.scrollWidth ?? 0;
    let scrollPosition = CardList?.scrollLeft ?? 0;

    CardList?.scrollTo({ left: scrollPosition - cardSize });
  };

  const onClickNavigate = (left: boolean) => {
    let CardList = document.getElementById("card-list");
    let card = CardList?.firstElementChild;
    let cardSize = (card?.clientWidth ?? 0) + 24;
    let scrollSize = CardList?.scrollWidth ?? 0;
    let scrollPosition = CardList?.scrollLeft ?? 0;

    if (left) CardList?.scrollTo({ left: scrollPosition - cardSize });
    else CardList?.scrollTo({ left: scrollPosition + cardSize });
  };

  const onClickMobile = (index: number) => {
    let CardList = document.getElementById("card-list");
    let card = CardList?.firstElementChild;
    let cardSize = (card?.clientWidth ?? 0) + 24;
    let scrollSize = CardList?.scrollWidth ?? 0;
    let scrollPosition = CardList?.scrollLeft ?? 0;

    CardList?.scrollTo({ left: scrollPosition + cardSize * index });
    setSelected(index);
  };

  return (
    <div className={styles.homeWrapper}>
      <Text variant="cook">Modelos em destaque</Text>
      <Spacer />
      <div className={styles.cardsWrapper} id="card-list">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <PaginationDesktop
        onClickLeft={() => onClickNavigate(true)}
        onClickRight={() => onClickNavigate(false)}
      />
      <PaginationMobile
        selected={selected}
        onClick={onClickMobile}
        total={cars.length}
      ></PaginationMobile>
    </div>
  );
};
