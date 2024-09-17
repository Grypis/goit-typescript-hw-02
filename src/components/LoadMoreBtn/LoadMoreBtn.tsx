import { FC } from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps{
  onClick: () => void;
}

const LoadMoreBtn:FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={css.button} type="button" onClick={onClick}>
      Load more...
    </button>
  );
};

export default LoadMoreBtn;
