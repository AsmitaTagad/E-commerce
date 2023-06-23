import React from "react";
import style from "./Home.module.css";
import { Products } from "../products/Products";
import { Footer } from "../footer/Footer";

function Home() {
  return (
    <>
    <div className={style.homeContainer}>
        <div className={style.textContainer}>
          <div className={style.textHeading}>
            <h2>Look</h2>
            <h1>
              <span>GOOD</span>
            </h1>
            <h3>with Us</h3>
          </div>
        </div>
    </div>
    <div className={style.productCard}>
        <Products />
      </div>
      <div>
      <Footer/>
      </div>
      
    </>
  );
}   

export default Home;
