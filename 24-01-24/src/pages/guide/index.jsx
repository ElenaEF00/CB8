import { useRouter } from "next/router";
import styles from "../../styles/Guide.module.scss";
import Image from "next/image";
import Step1 from "./Step1.png";
import Step2 from "./Step2.png";

export default function Guide() {
  const router = useRouter();

  const start = () => {
    router.replace("/pokedex");
  };

  return (
    <>
      <div className={styles.guide}>
        <h1>Pokedex - Guida all'uso</h1>
        <div className={styles.intro}>
          <div className={styles.mainInfo}>
            <p className={styles.mainInfoText}>
              Ciao Allenatore! Se ti trovi qui, è perché sei pronto a fare
              amicizia con creature misteriose e ad affrontare sfide da
              capogiro. Forse sei anche impaziente di scoprire cosa si cela
              dietro ogni angolo di questo mondo affascinante, e per farlo avete
              tra le mani il vostro fedele compagno di viaggio: il Pokedex!
              Questa guida ti sarà utile per utilizzarlo al meglio!
            </p>
          </div>
          <div>
            <ol className={styles.steps}>
              <li className={styles.step}>
                <div className={styles.stepInfo}>
                  <p>
                    Cliccando alla voce "Pokedex" che trovi nella barra di
                    navigazione, avrai la possibilità di cercare il tuo
                    preferito o conoscere i più comuni
                  </p>
                  <Image
                    src={Step1}
                    alt="Step1"
                    className={styles.firstStepImg}
                  ></Image>
                </div>
              </li>
              <li className={styles.step}>
                <div className={styles.stepInfo}>
                  <p>
                    Troverai una schermata riepilogativa sulle caratteristiche e
                    delle statistiche del tuo Pokemon{" "}
                  </p>
                  <Image
                    src={Step2}
                    alt="Step2"
                    className={styles.secondStepImg}
                  ></Image>
                </div>
              </li>
            </ol>
          </div>
          <button className={styles.guideBtn} onClick={start}>
            START
          </button>
        </div>
      </div>
    </>
  );
}
