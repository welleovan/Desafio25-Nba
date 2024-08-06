import styles from "./styles.module.css";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import LeBron from "../../assets/images/LeBronSlide.png";
import Kobe from "../../assets/images/KobeSlide.png";

export default function Slide() {
  const options = {
    loop: true,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    navSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };

  return (
    <>
      <section id={styles.slide_section}>
        <div className="container">
          <OwlCarousel className="owl-theme" {...options}>
            <div className={styles.slide}>
              <img src={LeBron} alt="LeBron James" />
              <p>
                Aos 39 anos, LeBron James atingiu a marca de 40 mil pontos na
                temporada regular da NBA
              </p>
            </div>
            <div className={styles.slide}>
              <img src={Kobe} alt="Kobe Bryant" />
              <p>
                Morte de Kobe Bryant: piloto de helicóptero ficou desorientado
                com mau tempo
              </p>
            </div>
          </OwlCarousel>
        </div>
      </section>
    </>
  );
}
