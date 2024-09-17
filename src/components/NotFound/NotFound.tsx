import { FC } from "react";
import css from "./NotFound.module.css";

const NotFound:FC = () => {
  return (
    <div className={css.container}>
      <p className={css.text}>NOT FOUND</p>
    </div>
  );
};

export default NotFound;
