import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faEye } from '@fortawesome/free-solid-svg-icons';

import classNames from "classnames/bind";
import styles from './Product.module.scss'

import { CartContext } from '../../contexts/CartContext/index';

const cx = classNames.bind(styles)

function Product({ product }) {
    const { id, image, category, title, price, } = product
    const { addToCart } = useContext(CartContext)

    return (
        <div className={cx('wrapper')}>
            <div className={cx('item')}>
                <div className={cx('inner')}>
                    <div className={cx('image')}>
                        <img src={image} />
                    </div>

                    <div className={cx('btn_cart_view')}>
                        <button className={cx('cart')} onClick={() => addToCart(product, id)} >
                            <FontAwesomeIcon icon={faCartShopping} />
                        </button>
                        <Link to={`/product/${id}`}>
                            <button className={cx('view')}>
                                <FontAwesomeIcon icon={faEye} />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={cx('description')}>
                <div>{category}</div>
                <Link style={{textDecoration: 'none'}} to={`/product/${id}`}>
                    <p>{title}</p>
                </Link>
                <div>$ {price}</div>
            </div>
        </div>
    );
}

export default Product;