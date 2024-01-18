import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../index.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

const style = {
  display: "flex",
  flexDirection: "column",
};

export default function Homepage() {
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data.products));
  }, []);

  useEffect(() => {
    if (selectedCategory !== null) {
      setProducts(
        allProducts.filter((product) => product.category === selectedCategory)
      );
    } else {
      setProducts(allProducts);
    }
  }, [selectedCategory, allProducts]);

  return (
    <div style={style}>
      <Navbar />
      <Hero />
      <ul className={styles.categories}>
        <li>
          <button
            className={styles.btn}
            onClick={() => setSelectedCategory("smartphones")}
          >
            Smartphone
          </button>
        </li>
        <li>
          <button
            className={styles.btn}
            onClick={() => setSelectedCategory("laptops")}
          >
            Laptops
          </button>
        </li>
        <li>
          <button
            className={styles.btn}
            onClick={() => setSelectedCategory("fragrances")}
          >
            Fragranze
          </button>
        </li>
        <li>
          <button
            className={styles.btn}
            onClick={() => setSelectedCategory("skincare")}
          >
            Skincare
          </button>
        </li>
        <li>
          <button
            className={styles.btn}
            onClick={() => setSelectedCategory("groceries")}
          >
            Alimentari
          </button>
        </li>
        <li>
          <button
            className={styles.btn}
            onClick={() => setSelectedCategory("home-decoration")}
          >
            Casa
          </button>
        </li>
      </ul>
      <div className={styles.container}>
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <div className={styles.product}>
              <h3 className={styles.title}>{product.title}</h3>
              <img src={product.thumbnail} alt={product.title} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
