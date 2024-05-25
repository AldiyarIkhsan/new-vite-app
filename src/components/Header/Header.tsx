import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { headerList } from "../NewsList/consts.ts";

function Header() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>();

  const clickHandler = (category: number) => {
    if (String(category) === activeCategory) {
      setActiveCategory(undefined);
      navigate(`/new-vite-app/`);
    } else {
      navigate(`/new-vite-app/?category=${category}`);
      setActiveCategory(String(category));
    }
  };

  return (
    <div className="header-content">
      <div className="header-content-text">
        <p>Мен жастарға сенемін</p>
        <p className="header-content-text-central">Magzhan.kz</p>
        <p>Мағжан Жұмабаев</p>
      </div>
      <div className="category-wrapper">
        {headerList.map((item) => (
          <div key={item.id}>
            <p
              className={`${
                activeCategory === String(item.id) ? "active-category" : ""
              } category`}
              onClick={() => clickHandler(item.id)}
              style={{ cursor: "pointer" }}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
