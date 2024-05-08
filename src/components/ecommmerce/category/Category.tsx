import { Link } from "react-router-dom"
import styles from "./styles.module.css"
import { TCategory } from "../../../types/shared"


export default function Category({ title, img, prefix }: TCategory) {

    return (
        <div className={styles.category}>
            <Link to={`/categories/products/${prefix}`} >
                <div className={styles.categoryImg}>
                    <img src={img} alt={title} />
                </div>
                <div className={styles.categoryTitle}>{title}</div>
            </Link>
        </div>
    )
}
