import { useContext } from 'react'
import { useParams } from 'react-router-dom'

import classNames from "classnames/bind";
import styles from './ProductDetails.module.scss'

import { CartContext } from '../../contexts/CartContext/index'
import { ProductContext } from '../../contexts/ProductContext/index'

const cx = classNames.bind(styles)

function ProductDetails() {
    const { id } = useParams()
    const { products } = useContext(ProductContext)
    const { addToCart } = useContext(CartContext)

    const product = products.find(item => item.id === +id)

    // if product is not found
    if (!product) {
        return (
            <section className={cx('not_found')}>
                loading ...
            </section>
        )
    }

    const { title, price, description, image } = product

    return (
        <section className={cx('section')}>
            <div className={cx('wrapper')}>
                <div className={cx('image_text')}>
                    <div className={cx('image')}>
                        <img src={image} />
                    </div>
                    <div className={cx('text')}>
                        <h1>{title}</h1>
                        <div>$ {price}</div>
                        <p>{description}</p>
                        <button onClick={() => addToCart(product, product.id)}>add to cart</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetails;