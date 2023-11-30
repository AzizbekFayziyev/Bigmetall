import Table from "../../components/UI/Table";
import { products } from "../../data";
import styles from "./product.module.scss";

// Product page
const Product = () => {
  return (
    <main className={styles.product}>
      <div className="cnt">
        <div className={styles.header}>
          <select>
            {products.map((e, id) => (
              <option key={id} value={e.title}>
                {e.title}
              </option>
            ))}
          </select>

          <h5>16.11.2023</h5>

          <select className={styles.selectPrimary}>
            <option value="old">Eski</option>
            <option selected value="new">
              Yangi
            </option>
          </select>
        </div>
        <Table primary={false} length={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
      </div>
    </main>
  );
};

export default Product;
