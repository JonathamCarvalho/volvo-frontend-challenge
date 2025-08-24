import React from "react";
import { userCars } from "../hooks/useCars";
import { CarCard } from "./CarCard";
import styles from "../../public/css/home.module.css";
import { Text } from "vcc-ui";
import { Spacer } from "./Spacer";
import PaginationDesktop from "./PaginationDesktop";

export const HomeCompent: React.FC = () => {
  const cars = userCars();
  const onClickLeft = () => {
    let CardList = document.getElementById("card-list");
    let card = CardList?.firstElementChild;
    let cardSize = (card?.clientWidth ?? 0) + 24;
    let scrollSize = CardList?.scrollWidth ?? 0;
    let scrollPosition = CardList?.scrollLeft ?? 0;
    if (scrollPosition >= cardSize) {
      CardList?.scrollTo({ left: scrollPosition - cardSize });
    }
  };
  const onClickRight = () => {
    let CardList = document.getElementById("card-list");
    let card = CardList?.firstElementChild;
    let cardSize = (card?.clientWidth ?? 0) + 24;
    let scrollSize = CardList?.scrollWidth ?? 0;
    let scrollPosition = CardList?.scrollLeft ?? 0;
    if (scrollPosition + cardSize <= scrollSize) {
      CardList?.scrollTo({ left: scrollPosition + cardSize });
    }
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
        onClickLeft={onClickLeft}
        onClickRight={onClickRight}
      />
    </div>
  );
};
