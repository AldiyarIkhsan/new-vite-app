import "./Pagination.css";
import React from "react";

type Props = {
  page: number;
  onPage: (page: number) => void;
  count: number;
};

export const Pagination: React.FC<Props> = ({ page, onPage, count }) => {
  return (
    <ul className="pagination">
      {[...Array(count)].map((_, index) => (
        <li
          key={index}
          className={`page-item ${
            page === index + 1 ? "page-item-active" : ""
          }`}
          onClick={() => onPage(index + 1)}
        >
          {index + 1}
        </li>
      ))}
    </ul>
  );
};
