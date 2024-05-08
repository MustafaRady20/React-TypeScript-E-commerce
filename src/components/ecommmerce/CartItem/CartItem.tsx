import { Button, Form } from "react-bootstrap"
import styles from "./cartItem.module.css"

const { cartItem, product, productImg, productInfo, carItemSelection } = styles
export default function CartItem(props) {
    return (
        <div className={cartItem}>

            <div className={product}>
                <div className={productImg}>
                    <img src={props.product.img} alt="..." />
                </div>

                <div className={productInfo}>
                    <h2>{props.product.title}</h2>
                    <h3>{props.product.price} EGP</h3>
                    <Button variant="secondary" style={{ color: "white" }} className="mt-auto">
                        Remove
                    </Button>
                </div>
            </div>
            <div className={carItemSelection}>
                <span className="d-block mb-1">{props.product.qunatity}</span>
                <Form.Select aria-label="Default select example">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>

                </Form.Select>
            </div>
        </div>
    )
}
