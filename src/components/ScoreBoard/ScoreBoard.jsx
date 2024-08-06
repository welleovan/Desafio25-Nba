import styles from "./styles.module.css";

import Kings from "../../assets/images/Kings0.png";
import Warriors from "../../assets/images/Warriors.png";
import Kicks from "../../assets/images/Kicks.png";
import Celtics from "../../assets/images/Celtics.png";
// import Curry from "../../assets/images/Curry.png";
// import Aaron from "../../assets/images/Aaron.png";

export default function ScoreBoard() {
  return (
    <>
      <section id={styles.scoreboard}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className={styles.score_1}>
                <h5>JOGO DE HOJE</h5>
                <div className={styles.times}>
                  <div className={styles.time}>
                    <img
                      className={styles.score_logo_kings}
                      src={Kings}
                      alt="Kings"
                    />
                    <p>Kings</p>
                  </div>
                  <div className={styles.time_timer}>
                    <p className={styles.score_game}>Jogo 4: GSW 2-1</p>
                    <p className={styles.score_time}>1:00PM</p>
                  </div>
                  <div className={styles.time}>
                    <img
                      src={Warriors}
                      className={styles.score_logo_warriors}
                      alt="Warriors"
                    />
                    <p>Warriors</p>
                  </div>
                </div>
              </div>
              <div className={styles.players_table_container}>
                <table className={styles.players_table}>
                  <thead>
                    <tr>
                      <th>Melhores Jogadores</th>
                      <th>PPG</th>
                      <th>RPG</th>
                      <th>APG</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={styles.players_perfil}>
                        <div className={styles.players_perfil_Aaron}></div>
                        {/* <img src={Aaron} alt="Aaron Fox" /> */}
                        <div>
                          <p style={{ fontSize: "18px", fontWeight: "500" }}>
                            De 'Aaron Fox <br /> SAC #5 G
                          </p>
                        </div>
                      </td>
                      <td>25.7</td>
                      <td>4.7</td>
                      <td>8.7</td>
                    </tr>
                    <tr>
                      <td className={styles.players_perfil}>
                        <div className={styles.players_perfil_Curry}></div>
                        {/* <img src={Curry} alt="Stephen Curry" /> */}
                        <div>
                          <p style={{ fontSize: "18px", fontWeight: "500", padding: '0' }}>
                            Stephen Curry <br /> GSW #30 G
                          </p>
                        </div>
                      </td>
                      <td>22.7</td>
                      <td>3.7</td>
                      <td>4.7</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.score_2}>
                <h5>JOGO DE HOJE</h5>
                <div className={styles.times}>
                  <div className={styles.time}>
                    <img
                      className={styles.score_logo_celtics}
                      src={Celtics}
                      alt=""
                    />
                    <p>Celtics</p>
                  </div>
                  <div className={styles.time_timer}>
                    <p className={styles.score_game}>Jogo 4: BOS 2-1</p>
                    <p className={styles.score_time}>1:00PM</p>
                  </div>
                  <div className={styles.time}>
                    <img
                      className={styles.score_logo_kicks}
                      src={Kicks}
                      alt=""
                    />
                    <p>Kicks</p>
                  </div>
                </div>
              </div>
              <div>
              <div className={styles.players_table_container}>
                <table className={styles.players_table}>
                  <thead>
                    <tr>
                      <th>Melhores Jogadores</th>
                      <th>PPG</th>
                      <th>RPG</th>
                      <th>APG</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={styles.players_perfil}>
                        <div className={styles.players_perfil_Jayson}></div>
                        {/* <img src={Aaron} alt="Aaron Fox" /> */}
                        <div>
                          <p style={{ fontSize: "18px", fontWeight: "500" }}>
                            Jason Tatum <br /> BOS #5 G
                          </p>
                        </div>
                      </td>
                      <td>25.7</td>
                      <td>4.7</td>
                      <td>8.7</td>
                    </tr>
                    <tr>
                      <td className={styles.players_perfil}>
                        <div className={styles.players_perfil_Jalen}></div>
                        {/* <img src={Curry} alt="Stephen Curry" /> */}
                        <div>
                          <p style={{ fontSize: "18px", fontWeight: "500", padding: '0' }}>
                            Jalen Brunson <br /> NYW #30 G
                          </p>
                        </div>
                      </td>
                      <td>22.7</td>
                      <td>3.7</td>
                      <td>4.7</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
