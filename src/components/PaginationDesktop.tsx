import { IconButton } from "vcc-ui";
import styles from "../../public/css/paginationDesktop.module.css";

interface PaginationDesktopProps {
  onClickLeft: () => void;
  onClickRight: () => void;
}

export default function PaginationDesktop({
  onClickLeft,
  onClickRight,
}: PaginationDesktopProps) {
  return (
    <div className={styles.btnWrapper}>
      <IconButton
        variant="outline"
        onClick={onClickLeft}
        aria-label="left"
        iconName="navigation-chevronback"
        intent="destructive"
      />

      <IconButton
        variant="outline"
        onClick={onClickRight}
        aria-label="right"
        iconName="navigation-chevronforward"
        intent="destructive"
      />
    </div>
  );
}
