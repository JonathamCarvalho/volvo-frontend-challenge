import { Text, Spacer, Flex, Link } from "vcc-ui";
import { Car } from "../types/car.interface";
import Image from "next/image";
import styles from "../../public/css/carCard.module.css";

interface CardProsps {
  car: Car;
}

export function CarCard({ car }: CardProsps) {
  return (
    <div className={styles.cardWrapper}>
      <Flex
        extend={{
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
          margin: 0,
        }}
      >
        <Text variant="bates" subStyle="emphasis">
          {car?.bodyType}
        </Text>
        <Text
          variant="amundsen"
          extend={{
            margin: 0,
            padding: 0,
          }}
        >
          {car?.modelName}
        </Text>
        <Text
          variant="bates"
          subStyle="inline-link"
          extend={{
            margin: 0,
            padding: 0,
          }}
        >
          {car?.modelType}
        </Text>
      </Flex>
      <Spacer />
      <Image src={car.imageUrl} alt={car.modelName} width="250" height="200" />

      <Spacer />
      <Flex
        extend={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: "10px",
        }}
      >
        <Link href="https://www.volvocars.com/" arrow="right">
          shop
        </Link>
        <Link href="https://www.volvocars.com/" arrow="right">
          learn
        </Link>
      </Flex>
    </div>
  );
}
