import { FC, useEffect, useState } from "react";
import "./App.css";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import getPhotos, { Photo} from "../../services/api";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage, { ErrorMessageProps } from "../ErrorMessage/ErrorMessage";
import NotFound from "../NotFound/NotFound";
import ImageModal from "../ImageModal/ImageModal";





const App:FC=() =>{
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorDetails, setErrorDetails] = useState<ErrorMessageProps>({
    title: "",
    message: "",
    suggestion: "",
  });
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalUrl, setModalUrl] = useState<string>("");
  const [modalAlt, setModalAlt] = useState<string>("");

  useEffect(() => {
    if (!query) return;
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const  data = await getPhotos(query, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setShowBtn(!!(data.total_pages && data.total_pages !== page));
        if (!data.results.length) {
          setIsEmpty(true);
        }
      } catch (error) {
        setErrorDetails({
          title: "Oops! Something went wrong.",
          message:
            (error as Error).message || "We couldn't fetch the images at this time.",
          suggestion:
            "Please try again later or contact support if the issue persists.",
        });
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [page, query]);

  const handleSubmit = (value: string) => {
    setQuery(value);
    setIsEmpty(false);
    setPage(1);
    setImages([]);
    setIsError(false);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (url: string, alt: string) => {
    setShowModal(true);
    setModalUrl(url);
    setModalAlt(alt);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalUrl("");
    setModalAlt("");
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isEmpty && <NotFound />}
      {isError && <ErrorMessage {...errorDetails} />}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {isLoading && <Loader />}
      {showBtn && <LoadMoreBtn onClick={loadMore} />}
      <ImageModal
        modalIsOpen={showModal}
        closeModal={closeModal}
        src={modalUrl}
        alt={modalAlt}
      />
    </>
  );
}

export default App;
