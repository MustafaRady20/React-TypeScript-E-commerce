import styles from "./cartPrice.module.css"
export default function CartTotalPrice() {
    return (
        <div className={styles.totalPriceContainer}>
            <span>Total Price</span>
            <span>200.00</span>
        </div>
    )
}
