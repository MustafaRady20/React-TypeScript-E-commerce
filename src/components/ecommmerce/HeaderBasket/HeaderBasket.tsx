import { useAppSelector } from "../../../store/hooks";
import CartIcon from "../../../assets/svg/cart.svg?react";
import styles from "./styles.module.css"
import { getCartTotlaQuantity } from "../../../store/selectores";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function HeaderBasket() {
    const navigate = useNavigate()
    const totalQunatity = useAppSelector(getCartTotlaQuantity)
    const [istotalQunatityChange, setIstotalQunatityChange] = useState(false)
    const style = `${styles.basketQuantity} ${istotalQunatityChange ? styles.pumbCartQuantity : ""}`

    useEffect(() => {
        if (!totalQunatity) {
            return
        }
        setIstotalQunatityChange(true)
        const doubunce = setTimeout(() => {
            setIstotalQunatityChange(false)
        }, 300)

        return () => {
            clearTimeout(doubunce)
        }

    }, [totalQunatity])

    return (

        <div className={styles.basketContainer} onClick={() => navigate("/cart")}>
            <CartIcon title="basket icon" />
            <div className={style}>{totalQunatity}</div>
        </div>
    )
}
