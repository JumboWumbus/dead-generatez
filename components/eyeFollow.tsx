import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { Parallax } from "react-scroll-parallax";
import styles from "../styles/skullFollow.module.scss"
import skullAnim from "../animations/SkullAnimWhite.json"


export default function EyeFollow() {

  const skullOptions ={
    loop: true,
    autoplay: true,
    animationData: skullAnim,
    rendererSettings:{
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  

  return (
      <>

<div className={styles.skullContainer}>


    <Parallax translateY={[0, 0]}  className={styles.skullFollow} >
    
    <div className={styles.skull}>
    <Lottie options={skullOptions}/>
    </div>
    
    </Parallax>


    </div>
  
  </>
  );
}
