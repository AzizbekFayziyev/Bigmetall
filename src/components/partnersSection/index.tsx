import styles from "./partners.module.scss";

// Partners section
const PartnersSection = () => {
  return (
    <section className={styles.partners}>
      <div className="cnt">
        <div className={styles.wrapper}>
          <img
            width={500}
            className={styles.partnersBg}
            src="./partnerBg.png"
            alt="Background"
          />

          <div
            data-aos="zoom-in-right"
            data-aos-offset="300"
            data-aos-delay="200"
            data-aos-duration="500"
            className={styles.text}
          >
            <h6>Biz ishlagan tashkilotlar</h6>
            <h3>We are trusted by these companies</h3>
            <p>
              Ushbu tashkilotlar bilan 10 yildan ortiq vaqt davomida birga o‘z
              faoliyatimizni yuritib kelmoqdamiz. hamkorlarimizning ishonchi
              faoliyatimizda eng muhim tayanch.
            </p>
          </div>

          <div
            data-aos="fade-in"
            data-aos-offset="300"
            className={styles.partnerImgs}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
              <img key={id} src="./partner.png" alt="partner" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
