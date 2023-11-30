import { useNavigate } from "react-router-dom";
import AboutSection from "../../components/aboutSection";
import PartnersSection from "../../components/partnersSection";
import ProductCards from "../../components/UI/ProductCards";
import Table from "../../components/UI/Table";
import Title from "../../components/UI/Title";
import styles from "./home.module.scss";

// Main page
const Home = () => {
  const navigate = useNavigate();
  const openUrl = () => {
    window.open(
      "https://www.google.com/maps/search/Yunusobod+tumani,+Quruvchilar+mahallasi,+42-uy/@41.3466832,69.2882657,17z/data=!3m1!4b1?entry=ttu"
    );
  };
  return (
    <main className={styles.home}>
      {/* Header Section */}
      <header className={styles.header}>
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          className={styles.headerText}
        >
          <h1>Har qanday sharoitda metallarni biz bilan oson topasiz</h1>
          <h5>
            Metallarni siz xohlagan miqdorda va siz xohlagan sifatda yetkazib
            bera olamiz
          </h5>
          <button onClick={() => navigate("/category")}>
            Mahsulotlarni ko‘rish
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
        </div>

        <img
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-duration="500"
          className={styles.headerImg}
          src="./hero.png"
          alt="Hero image"
        />
      </header>

      {/* Products section */}
      <section className={styles.products}>
        <div className="cnt py-2">
          <Title text="TOP mahsulotlar" />

          <Table />
        </div>
      </section>

      {/* Category Section */}
      <section className={styles.category}>
        <div className="cnt">
          <Title text="Katalog" />
          <ProductCards />

          <button onClick={() => navigate("/category")}>
            Katalogga o'tish
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="cnt">
        <AboutSection />
      </section>

      {/* Delivery info Section */}
      <section className={styles.delivery}>
        <div className="cnt">
          <h2>
            Mahsulotlarni istalgan vaqtda qulay narxda “ BIG METALL “ dan toping
          </h2>

          <div className={styles.coin}>
            <div>
              <span>10</span>
              <p>tonnagacha bepul yetkazib berish</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners section */}
      <PartnersSection />

      <section
        data-aos-offset="300"
        data-aos="fade-in"
        data-aos-duration="500"
        className={styles.contactForm}
      >
        <div className="cnt">
          <div className={styles.content}>
            <div className={styles.info}>
              <div className={styles.infoText}>
                <i
                  className={`fa-solid fa-location-dot ${styles.infoTextIcon}`}
                ></i>
                <div>
                  <h6>Manzil</h6>

                  <p>
                    Toshkent shahri, Yunusobod tumani, Quruvchilar mahllasi,
                    Ashxobod ko‘chasi 42-uy
                  </p>

                  <button onClick={openUrl}>
                    Xaritadan ko‘rish
                    <i className="fa-solid fa-location-dot"></i>
                  </button>
                </div>
              </div>

              <div className={styles.infoText}>
                <i className={`fa-solid fa-phone ${styles.infoTextIcon}`}></i>
                <div>
                  <h6>Bog‘lanish uchun :</h6>
                  <span>sarvarhakimov99@gmail.com</span>
                  <span>+99 899 999 99 99</span>
                </div>
              </div>
            </div>

            <form className={styles.form}>
              <div className="flex items-center justify-between">
                <div className={styles.formInput}>
                  <label>Ismingiz</label>
                  <input type="text" />
                </div>
                <div className={styles.formInput}>
                  <label>Ismingiz</label>
                  <input type="text" />
                </div>
              </div>
              <div className={styles.formInput}>
                <label>Ma’lumot</label>
                <textarea rows={5}></textarea>
              </div>

              <button onClick={openUrl}>
                Yuborish <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
