import { useEffect } from "react";
import { CartItem, CartTotalPrice } from "../components/ecommmerce";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { actGetProductsInfo } from "../store/cart/cartSlice";
import Loading from "../components/feedback/loading/Loading";

export default function Cart() {
    const dispatch = useAppDispatch()
    const { items, productFullInfo, loading, error } = useAppSelector((state) => state.cart)

    const products = productFullInfo.map(el => (
        { ...el, qunatity: items[el.id] }
    ))
    useEffect(() => {
        dispatch(actGetProductsInfo())
    }, [dispatch])
    return (
        <>
            <Loading loading={loading} error={error}>
                <div>Cart</div>
                {products.map(el => <CartItem product={el} key={el.id} />)}
                <CartTotalPrice />
            </Loading>
        </>
    )
}
