import styles from "../styles/PizzaCard.module.css";
import Image from 'next/image';
import Link from "next/link";

const PizzaCard = ({pizza}) => {
    return (
        <>
        <Link href={`/product/${pizza._id}`}>
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src={pizza.img} alt="" layout="fill" objectFit="contain" />
            </div>
            <h1 className={styles.title}>{pizza.title}</h1>
            <span className={styles.price}>$ {pizza.prices[0]}</span>
            <p className={styles.desc}>
                {pizza.desc}
            </p>
        </div>
        </Link>
        </>
    )
}

export default PizzaCard