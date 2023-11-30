import styles from "./blog.module.scss";

// Blogs page
const Blog = () => {
  return (
    <main className="cnt">
      <div className={styles.cards}>
        {[1, 2, 3].map((id) => (
          <div
            data-aos-delay={200 * id}
            data-aos="zoom-in"
            className={styles.card}
            key={id}
          >
            <img src="./blog.png" alt="Blog img" />
            <span>
              <i className="fa-regular fa-clock"></i> 27 nov. 2023
            </span>

            <h3>Dvuxtavr mahsulotlariga 10 foizgacha chegirma e’lon qilindi</h3>

            <h5>
              Ushbu mahsulotlarimizga chegirma faqat yanvar oyi uchun amal
              qiladi. Bundan foydalanib qoling
            </h5>

            <button>
              <i className="fa-solid fa-eye"></i> Batafsil
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Blog;
