import styles from "./footer.module.scss";

// Footer component
const Footer = () => {
  const openUrl = () =>
    window.open(
      "https://www.google.com/maps/search/Yunusobod+tumani,+Quruvchilar+mahallasi,+42-uy/@41.3466832,69.2882657,17z/data=!3m1!4b1?entry=ttu"
    );

  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2995.2608710015475!2d69.2882656759207!3d41.34668319851922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sYunusobod%20tumani%2C%20Quruvchilar%20mahallasi%2C%2042-uy!5e0!3m2!1sru!2s!4v1701254286307!5m2!1sru!2s"
        width="100%"
        height="140px"
        className={styles.mobileMap}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <footer className={styles.footer}>
        <div className="cnt">
          <div className={styles.content}>
            <div className={styles.leftSide}>
              <img src="./logo.png" alt="Big metall logo" />

              <div className={styles.footerText}>
                <div className={styles.links}>
                  <div>
                    <a href="#">Katalog</a>
                    <a href="#">Kompaniya haqida</a>
                    <a href="#">Blog</a>
                  </div>
                  <div>
                    <a href="#">Kalkulyator</a>
                    <a href="#">Kontaktlar</a>
                  </div>
                </div>

                <div className={styles.contact}>
                  <div>
                    <h5>
                      <i className="fa-solid fa-phone"></i> Bog‘lanish uchun:
                    </h5>
                    <span>sarvarhakimov99@gmail.com</span>
                    <span>+99 899 999 99 99</span>
                  </div>

                  <div>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-telegram"></i>
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.rightSide}>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2995.2608710015475!2d69.2882656759207!3d41.34668319851922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sYunusobod%20tumani%2C%20Quruvchilar%20mahallasi%2C%2042-uy!5e0!3m2!1sru!2s!4v1701254286307!5m2!1sru!2s"
                  width="100%"
                  height="100%"
                  className="border-0"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <button onClick={openUrl}>
                  Xaritadan ko‘rish
                  <i className="fa-solid fa-location-dot"></i>
                </button>
              </div>

              <h6>
                <i className="fa-solid fa-location-dot"></i> Manzil : Yunusobod
                tumani, Quruvchilar mahallasi, 42-uy
              </h6>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <h5>Barcha huquqlar himoyalangan. “BIG METALL” 2023</h5>
          </div>

          <button onClick={openUrl} className={styles.mobileBtn}>
            Xaritadan ko‘rish
            <i className="fa-solid fa-location-dot"></i>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
