import AboutSection from "../../components/aboutSection";
import PartnersSection from "../../components/partnersSection";
import styles from "./about.module.scss";

// About page
const About = () => {
  return (
    <main className={styles.about}>
      {/* Header */}
      <header className={styles.header}>
        <div className="cnt">
          <div className={styles.headerText}>
            <h1 data-aos-delay="200" data-aos="fade-up">
              Sizni kompaniyamiz veb-saytiga tashrif buyurganingizdan mamnunmiz!
            </h1>
            <h3 data-aos-delay="400" data-aos="fade-up">
              Biz bilan hamkorlik qilsangiz, siz uchun narxlar yanada
              qulaylashib boradi. Bizning maqsadimiz mijozlar ishonchini
              qozonish va ularga sifatli mahsulot yetkazib berish. Mahsulotlar
              va biz haqimizdagi ma’lumotlar quyida kengroq berilgan. Biz siz
              bilan ishlashdan mamnunmiz !
            </h3>
            <p data-aos-delay="400" data-aos="fade-up">
              Bizning maqsadimiz mijozlar ishonchini qozonish va ularga sifatli
              mahsulot yetkazib berish.{" "}
            </p>
          </div>

          <div className={styles.headerInfo}>
            <div data-aos-delay="200" data-aos="zoom-in">
              <h5>50.000 t</h5>
              <p>Yillik mahsulot aylanmasi</p>
            </div>
            <div data-aos-delay="400" data-aos="zoom-in">
              <h5>185 t</h5>
              <p>Kunlik mahsulot aylanmasi</p>
            </div>
            <div data-aos-delay="600" data-aos="zoom-in">
              <h5>3000 t</h5>
              <p>Hozirda sotuvda mavjud</p>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="cnt mt-48">
        <AboutSection />
      </section>

      {/* Target section */}
      <section className={styles.target}>
        <div className="cnt">
          <div className={styles.wrapper}>
            <img src="./line.png" alt="line" />

            <div className={styles.cards}>
              <div data-aos-delay="200" data-aos="zoom-in-up" className={styles.card}>
                <div>
                  <h4>STRATEGIYA</h4>
                  <h5>Bizning strategiya</h5>
                  <p>
                    Bizning strategiyamiz, mijozlar bilan savdo aloqalarini
                    yaxshilash va ularga sifatli xizmat ko‘rsatishni
                    bosqichma-bosqich yangilash
                  </p>
                </div>
              </div>

              <div data-aos-delay="400" data-aos="zoom-in-up" className={styles.card}>
                <div>
                  <h4>MAQSAD</h4>
                  <h5>Bizning strategiya</h5>
                  <p>
                    Bizning strategiyamiz, mijozlar bilan savdo aloqalarini
                    yaxshilash va ularga sifatli xizmat ko‘rsatishni
                    bosqichma-bosqich yangilash
                  </p>
                </div>
              </div>

              <div data-aos-delay="600" data-aos="zoom-in-up" className={styles.card}>
                <div>
                  <h4>MISSIYA</h4>
                  <h5>Bizning strategiya</h5>
                  <p>
                    Bizning strategiyamiz, mijozlar bilan savdo aloqalarini
                    yaxshilash va ularga sifatli xizmat ko‘rsatishni
                    bosqichma-bosqich yangilash
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners section */}
      <section className={styles.partners}>
        <PartnersSection />
      </section>
    </main>
  );
};

export default About;
