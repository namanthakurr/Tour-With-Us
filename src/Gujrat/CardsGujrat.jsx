import React from "react";
import  styles from '../Rajasthan/Rajasthan.module.css'
import FlipCardsSection from "../Rajasthan/FlipCardsSection"; 
 import { GujratCardData } from "../Rajasthan/CardData";

function Cards_Gujrat() {
  return (
    <div className="container">
      <center>
        <section className={styles.Cards_Main}>
          <div className={styles.rajasthan_logo2}>
            <img src="/images/Rajasthan_img/Rajasthan_Logo2.png" alt="Rajasthan-Logo2" />
          </div>
          <div className={styles.rajasthan_Pattern}>
            <img src="/images/Rajasthan_img/Rajasthan-Petterns.png" alt="Rajasthan-Pattern" />
          </div>
          <FlipCardsSection cards={GujratCardData} />
        </section>
      </center>
    </div>
  );
}

export default  Cards_Gujrat;
