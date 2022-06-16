import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";

const Navbar = () => {
    const quantity = useSelector((state)=>state.cart.quantity);

    return (
        <div className={styles.container}>
            <div className={styles.item1}>
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" alt="" width="30" height="30" />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text} >ORDER NOW</div>
                    <div className={styles.text} >+91 12345 67890</div>
                </div>
            </div> 
            <div className={styles.item2}>
                <ul className={styles.list}>
                    <Link href="/">
                        <li className={styles.listItem}>Homepage</li>
                    </Link>
                    <li className={styles.listItem}>Products</li>
                    <Link href="/">
                        <li className={styles.logo}>Italiano Pizzeria</li>
                    </Link>
                    <li className={styles.listItem}>Menu</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <div className={styles.item3}>
                <Link href="/cart" passHref>
                    <div className={styles.cart}>
                        <Image src="/img/cart.png" alt="" width="30px" height="30px" />
                        <div className={styles.counter}>{quantity}</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar