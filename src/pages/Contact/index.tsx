import React, { useState } from "react";
import styles from "./contact.module.scss";

// Contact form page
const Contact = () => {
  const [dialog, setDialog] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDialog(true);

    setTimeout(() => {
      setDialog(false);
    }, 1500);
  };

  return (
    <div className="cnt">
      <main className={styles.contact}>
        <form data-aos-delay="200" data-aos="zoom-in-right" onSubmit={onSubmit} className={styles.form}>
          <h3>Kontakt</h3>
          <p>
            Bizga istalgan vaqtda xabar qoldiring. Operatorlarimiz siz bilan tez
            orada bog‘lanishadi
          </p>
          <input name="input" required type="text" placeholder="Ismingiz" />
          <input name="input" required type="text" placeholder="Tel.raqam" />
          <input name="input" required type="text" placeholder="Xabar" />
          <button>
            Yuborish <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>

        <div data-aos-delay="400" data-aos="zoom-in-left" className={styles.info}>
          <h4>Info</h4>
          <h6>
            <i className="fa-regular fa-envelope"></i> bigmetall.uz
          </h6>
          <h6>
            <i className="fa-solid fa-phone"></i> +99 899 999 99 99
          </h6>
          <h6>
            <i className="fa-solid fa-location"></i> Yunusobod tumani, 19-daha,
            15-uy
          </h6>
          <h6>
            <i className="fa-regular fa-clock"></i> 9:00 - 18:00
          </h6>
        </div>
      </main>

      {dialog && (
        <div className={styles.dialog}>
          <div className={styles.content}>
            <i className="fa-regular fa-circle-check"></i>
            <h3>So‘rovnoma muvaffaqiyatli yuborildi</h3>
            <p>Operatorlarimiz tez orada siz bilan bog‘lanishadi</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
