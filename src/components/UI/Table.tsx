import { FC } from "react";
import { ITable } from "../../types";
import "./style.scss";

const Table: FC<ITable> = ({ length = [1, 2, 3, 4, 5], primary = true }) => {
  return (
    <table className="w-full border-separate border-spacing-y-2">
      <thead
        className={`${
          primary ? "bg-primary" : "bg-dark"
        } text-white font-serif font-bold`}
      >
        <tr>
          <th className="p-3">Nomi</th>
          <th className="noMobile p-3">Temir markasi</th>
          <th className="noMobile p-3">Uzunligi</th>
          <th className="p-3">Tonna uchun narxi</th>
        </tr>
      </thead>

      <tbody>
        {length.map((id) => (
          <tr
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="400"
            className={`bg-white text-center font-medium ${
              primary ? "hover:bg-dark" : "hover:bg-secondary"
            } hover:text-white cursor-pointer`}
            key={id}
          >
            <td className="p-3">Armatura</td>
            <td className="noMobile p-3">A500C/35Gs</td>
            <td className="noMobile p-3">12</td>
            <td className="p-3">9 400 000 uzs</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
