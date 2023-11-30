import { FC } from "react";

const Title: FC<{ text: string }> = ({ text }) => {
  return (
    <h2
      data-aos="zoom-in"
      data-aos-delay="200"
      className="font-normal font-serif text-3xl my-8"
    >
      {text}
    </h2>
  );
};

export default Title;
