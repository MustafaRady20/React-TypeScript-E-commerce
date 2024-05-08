import { Button, Spinner } from "react-bootstrap"
import styles from "./styles.module.css"
import { useAppDispatch } from "../../../store/hooks";
import { addToCart } from "../../../store/cart/cartSlice";
import { useEffect, useState } from "react";
interface TProduct { id?: number; title: string; price: string; img: string; cat_prefix: string }
export default function Product({ id, title, img, price }: TProduct) {
    const dispatch = useAppDispatch()

    const [isBtnDisabled, setIsBtnDisabled] = useState(false)

    useEffect(() => {
        if (!isBtnDisabled) {
            return
        }

        setIsBtnDisabled(true)

        const debounce = setTimeout(() => {
            setIsBtnDisabled(false)
        }, 300)

        return () => clearTimeout(debounce)

    }, [isBtnDisabled])

    const addToCartHandler = () => {
        dispatch(addToCart(id))
        setIsBtnDisabled(true)
    }


    return (
        <div className={styles.product}>
            <div className={styles.productImg}>
                <img src={img} alt={title} />
            </div>
            <h2 title={title}>{title}</h2>
            <h3>{price} EGY</h3>
            <Button variant="info" style={{ color: "white" }} onClick={addToCartHandler} disabled={isBtnDisabled}>

                {isBtnDisabled ? (
                    <>
                        <Spinner animation="border" size="sm" /> Loading...
                    </>
                ) : ("Add To Cart")}

            </Button>
        </div>
    )
}
