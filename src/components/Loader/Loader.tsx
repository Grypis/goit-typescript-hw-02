import { ThreeDots } from "react-loader-spinner";
import css from "./Loader.module.css";
import { FC } from "react";


const Loader:FC = () => {
  return (
    <div className={css.loader}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#2196f3"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
