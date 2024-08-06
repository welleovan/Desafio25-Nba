import React from 'react';
import styles from './styles.module.css';
import Lakers from '../../assets/images/Lakers.png';
import Bulls from '../../assets/images/Bulls.png';
import nba from '../../assets/images/nba.png';

const Team = ({ logo, name, score, logoStyle }) => (
  <div className={styles.team}>
    <div className={logoStyle}>
      <img src={logo} alt={name} />
    </div>
    <h5>{name}</h5>
    <p>{score}</p>
  </div>
);

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.containerTimes}>
        <div>
          <img className={styles.nbaLogo} src={nba} alt="NBA logo" />
        </div>
        <div className={styles.times}>
          <Team logo={Lakers} name="Lakers" score="60%" logoStyle={styles.teamLogo} />
          <Team logo={Bulls} name="Bulls" score="40%" logoStyle={styles.teamLogo} />
        </div>
        <div className={styles.scoreboard}>
          <h4>JOGO 5: LAK 3-1</h4>
        </div>
      </div>
    </section>
  );
};

export default Banner;
