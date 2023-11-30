import ProductCards from "../../components/UI/ProductCards";
import Title from "../../components/UI/Title";
import styles from "./calculator.module.scss";

// Calculator page
const Calculator = () => {
  return (
    <main className={styles.calculator}>
      <div className="cnt">
        <Title text="Kalkulyator" />
      </div>

      <div className="bg-light">
        <div className="cnt py-10">
          <ProductCards primary={false} />
        </div>
      </div>
      <div className="cnt">
        {/* Form section */}
        <form className={styles.form}>
          <div className={styles.selects}>
            <select>
              <option value="width">Uzunligi bo'yicha</option>
              <option value="height">Og'irligi bo'yicha</option>
            </select>
            <select>
              <option value="new">Yangi</option>
              <option value="old">Eski</option>
            </select>
          </div>

          <div className={styles.outputs}>
            <div>
              <label>Diametr D, mm</label>
              <input type="number" readOnly value={0} />
            </div>

            <div>
              <label>Uzunligi, m</label>
              <input type="number" readOnly value={0} />
            </div>

            <div>
              <label>Armatura og‘irligi</label>
              <input
                className="bg-primaryDark text-white"
                type="number"
                readOnly
                value={0}
              />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Calculator;
