import Title from "../UI/Title";
import styles from "./about.module.scss";

const AboutSection = () => {
  return (
    <div className={styles.aboutSection}>
      <Title text="Biz haqimizda" />

      <div className={styles.aboutCard}>
        <div
          data-aos="zoom-in-right"
          data-aos-offset="300"
          data-aos-delay="200"
          className={styles.text}
        >
          <p className="font-medium mb-4">
            2018-yilda “Metallinvest” kompaniyasi O‘zbekiston qurilish bozoriga
            kirib keldi va “metall prokatining ishonchli yetkazib beruvchisi”
            maqomini ishonchli tarzda qo‘lga kiritdi.
          </p>
          <p className="font-medium mb-16">
            5 yillik davr mobaynida kompaniyamiz shaffof ishbilarmonlik obro'si,
            mijozlarga yo'naltirilganligi, moslashuvchan narx siyosati va yaxshi
            xizmat ko'rsatuvchi ishonchli hamkor sifatida o'zini namoyon etishga
            muvaffaq bo'ldi. Ayni paytda korxona ko‘plab mahalliy va xorijiy
            metall buyumlar ishlab chiqaruvchi korxonalar, jumladan,
            metallurgiya va tog‘-kon sanoati korxonalari bilan hamkorlik
            aloqalarini yo‘lga qo‘ygan.
          </p>

          <p className="font-medium mb-4">
            2018-yilda “Metallinvest” kompaniyasi O‘zbekiston qurilish bozoriga
            kirib keldi va “metall prokatining ishonchli yetkazib beruvchisi”
            maqomini ishonchli tarzda qo‘lga kiritdi.
          </p>
          <p>
            5 yillik davr mobaynida kompaniyamiz shaffof ishbilarmonlik obro'si,
            mijozlarga yo'naltirilganligi, moslashuvchan narx siyosati va yaxshi
            xizmat ko'rsatuvchi ishonchli hamkor sifatida o'zini namoyon etishga
            muvaffaq bo'ldi. Ayni paytda korxona ko‘plab mahalliy va xorijiy
            metall buyumlar ishlab chiqaruvchi korxonalar, jumladan,
            metallurgiya va tog‘-kon sanoati korxonalari bilan hamkorlik
            aloqalarini yo‘lga qo‘ygan.
          </p>
        </div>

        <img
          data-aos="zoom-in-left"
          data-aos-offset="300"
          data-aos-delay="600"
          width={580}
          src="./about.png"
          alt="About img"
        />
      </div>
    </div>
  );
};

export default AboutSection;
