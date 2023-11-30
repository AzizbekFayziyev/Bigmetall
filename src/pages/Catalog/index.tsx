import ProductCards from "../../components/UI/ProductCards";
import Title from "../../components/UI/Title";

// Catalog page
const Catalog = () => {
  return (
    <main>
      <div className="cnt">
        <Title text="Katalog" />
      </div>
      <div className="bg-light">
        <div className="cnt py-10">
          <ProductCards primary={false} />
        </div>
      </div>
    </main>
  );
};

export default Catalog;
