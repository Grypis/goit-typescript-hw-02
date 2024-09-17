import { FC } from "react";
import css from "./ErrorMessage.module.css";

export interface ErrorMessageProps{
  title: string;
  message:string;
  suggestion:string;
}

const ErrorMessage:FC<ErrorMessageProps> = ({ title, message, suggestion }) => {
  return (
    <div className={css.container}>
      <div className={css.title}>{title}</div>
      <div className={css.message}>{message}</div>
      <div className={css.suggestion}>{suggestion}</div>
    </div>
  );
};

export default ErrorMessage;
