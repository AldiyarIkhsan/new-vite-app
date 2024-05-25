import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>();

  const headerList = [
    { id: 1, name: "Ақпарат" },
    { id: 2, name: "Әдебиет" },
    { id: 3, name: "Өнер" },
    { id: 4, name: "Ғылым" },
    { id: 5, name: "Эксклюзив" },
    { id: 6, name: "Карьера" },
    { id: 7, name: "Спорт" },
    { id: 8, name: "Тарих" },
  ];

  const clickHandler = (category: number) => {
    navigate(`/new-vite-app/?category=${category}`);
    if (String(category) === activeCategory) {
      setActiveCategory(undefined);
    } else {
      setActiveCategory(String(category));
    }
  };

  return (
    <div className="footer-content">

      <div className="footer-content-items">
        {headerList.map((item) => (
          <div key={item.id}>
            <p
              className="category-footer"
              onClick={() => clickHandler(item.id)}
              style={{ cursor: "pointer" }}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
        <p className="footer-content-text">Байлыныс үшін: Байлыныс үшін: magzhankz@gmail.com</p>
        <p className="footer-content-text">Барлық құқықтар сақталған@2024</p>
    </div>
  );
}

export default Footer;