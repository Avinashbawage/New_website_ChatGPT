/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div>
      <div className={styles.container}>
        <div>
        <div>
        <nav>
  <ul>
    <li><a href="">Home</a></li>
    <li><a href="">Services</a>
      <ul>
        <li><a href="">Web Design</a></li>
        <li><a href="">Web Development</a></li>
        <li><a href="">Graphic Design</a></li>
      </ul>
    </li>
    <li><a href="">About</a></li>
    <li><a href="">Contact</a></li>
  </ul>
</nav>

        </div>

        </div>
        <div className={styles.hero}>
          <div className={styles.maincontainer}>
            <div className={styles.text_container}>
              <h3 className="">I'm</h3>
              <h1 className={styles.animatedtext}>Kate Winslet</h1>

              <div className="">
                Web Designer, Web Developer, Front End Developer, Apps Designer,
                Apps Developer
              </div>
            </div>
            <div className={styles.profile}>
              <img className="img-fluid" src="../../../profile.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
