import React from 'react'
import styles from "../../StyleSheets/Rotatecard/Rotate.module.css"
import photo from "../../image/naveen.JPG"


const RotateCard = () => {
    return (
        <>
            <div className={styles["card middle"]}>
                <div className={styles['front']}>
                    <img src={photo} alt="..." />
                   
                </div>
                <div className={styles["back"]}>
                    <div className={styles["back_content middle"]}>
                        <h2> Coder </h2>
                        <span>NEW Create</span>
                        <div className={styles["sm"]}>

                            <a href="/"><i class="fab fa-facebook-f"/></a>
                            <a href="/"><i class="fab fa-instagram" /></a>
                            <a href="/"><i class="fab fa-youtube" /></a>
                            <a href="/"><i class="fab fa-github" /></a>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
};

export default RotateCard;
