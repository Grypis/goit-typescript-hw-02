import React, { useState, ChangeEvent, FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) {
      return toast.error("Please, enter text");
    }
    onSubmit(query);
    setQuery("");
    e.currentTarget.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={css.form}>
        <Toaster />
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={query}
          className={css.input}
        />
        <button type="submit" className={css.button}>
          <FiSearch size="16px" />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
