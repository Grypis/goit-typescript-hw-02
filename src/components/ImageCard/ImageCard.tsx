
import { FC } from "react";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  alt: string;
  src: string;
  regularSrc: string;
  openModal: (src: string, alt: string) => void;
}


const ImageCard:FC<ImageCardProps> = ({ alt, src, regularSrc, openModal }) => {
  return (
    <div className={css.thumb}>
      <img src={src} alt={alt} onClick={() => openModal(regularSrc, alt)} />
    </div>
  );
};

export default ImageCard;
