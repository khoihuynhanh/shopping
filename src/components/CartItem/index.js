import { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { faMinus, faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import styles from './CartItem.module.scss'

import { CartContext } from "../../contexts/CartContext/index";


const cx = classNames.bind(styles)

function CartItem({item}) {
    const { id, title, image, price, amount } = item
    const { removeItem, increaseItem, decreaseItem } = useContext(CartContext)
    
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('info')}>
                    <Link to={`/product/${id}`}>
                        <img className={cx('image')} src={image} />
                    </Link>
    
                    <div>
                        <Link style={{textDecoration: 'none'}} to={`/product/${id}`}>
                            <div className={cx('title')}>{title}</div>
                        </Link>

                        <div className={cx('description')}>
                            <div className={cx('amount')}>
                                <FontAwesomeIcon onClick={() => decreaseItem(id)} style={{fontSize: '1rem', padding: '10px', cursor: 'pointer'}} icon={faMinus} />  
                                <div>{amount}</div>
                                <FontAwesomeIcon onClick={() => increaseItem(id)} style={{fontSize: '1rem', padding: '10px', cursor: 'pointer'}} icon={faPlus} />
                            </div>
                            <div className={cx('price')}>$ {price}</div>
                            <div className={cx('final_price')}>$ {`${parseFloat(price * amount).toFixed(2)}`}</div>
                        </div>
                    </div>
                </div>

                <div className={cx('icon')}>
                    <FontAwesomeIcon onClick={() => removeItem(id)} icon={faX} />
                </div>
            </div>
        </div>
    );
}

export default CartItem;