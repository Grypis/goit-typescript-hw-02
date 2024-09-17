import { FC, ReactNode } from "react";
import css from "./GridItem.module.css";

interface GridItemProps {
  children: ReactNode;
}
const GridItem: FC<GridItemProps> = ({ children }) => {
  return <li className={css.item}>{children}</li>;
};
export default GridItem;
