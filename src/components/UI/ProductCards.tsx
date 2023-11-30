import { useNavigate } from "react-router-dom";
import { products } from "../../data";
import { FC } from "react";
import "./style.scss";

const ProductCards: FC<{ primary?: boolean }> = ({ primary = true }) => {
  const navigate = useNavigate();
  // products data
  return (
    <div className="cards flex items-center flex-wrap mx-auto">
      {products.map((e, id) => (
        <div
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-duration="400"
          onClick={() => navigate(`/product/${id}`)}
          className={`m-4 ${
            primary ? "bg-light" : "bg-white"
          } w-[215px] h-[160px] flex flex-col justify-center rounded-sm border-l-2 border-secondary px-3 cursor-pointer hover:bg-dark hover:text-white transition-all`}
          key={id}
        >
          <img
            className="block mx-auto mb-4"
            width={100}
            src={e.img}
            alt={e.title}
          />
          <h5 className="font-medium font-serif text-xl">{e.title}</h5>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
