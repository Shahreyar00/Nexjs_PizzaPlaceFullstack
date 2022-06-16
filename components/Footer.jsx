import React from 'react';
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from 'next/link';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item1}>
                <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
            </div>
            <div className={styles.item2}>
                <div className={styles.card}>
                    <h2 className={styles.motto}> 
                        YOUR OWN SLICE OF BEST ITALIAN PIZZA.
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND YOUR RESTAURANT</h1>
                    <p className={styles.text}>
                        102/B Main Complex
                        <br/>High Street, NY
                        <br/>212 12345 67890
                    </p>
                    <p className={styles.text}>
                        201 Brew Mall 
                        <br/>Outer Circle, NY
                        <br/>516 12345 67890
                    </p>
                    <p className={styles.text}>
                        01/A Club Complex
                        <br/>Down Town, NY
                        <br/>914 12345 67890
                    </p>
                </div> 
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY - FRIDAY 
                        <br/> 9:00 - 22:00 
                    </p>
                    <p className={styles.text}>
                        WEEKENDS 
                        <br/> 11:00 - 24:00 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer