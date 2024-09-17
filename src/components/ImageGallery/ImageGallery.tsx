import { FC } from "react";
import { Photo } from "../../services/api";
import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import ImageCard from "../ImageCard/ImageCard";

interface ImageGalleryProps{
  images: Photo[];
  openModal: (url: string, alt: string) => void;
}


const ImageGallery: FC<ImageGalleryProps>=({ images, openModal }) =>{
  return (
    <Grid>
      {images.map((image) => {
        const { id, alt_description: alt, urls } = image;
        const { small, regular } = urls;

        return (
          <GridItem key={id}>
            <ImageCard
              alt={alt}
              src={small}
              openModal={openModal}
              regularSrc={regular}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
}

export default ImageGallery;
