
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss'

import CartItem from '../../components/CartItem/index'
import { SidebarContext } from '../../contexts/SidebarContext/index';
import { CartContext } from '../../contexts/CartContext/index'; 



const cx = classNames.bind(styles)

function Sidebar() {
    const { isOpen, handleClose } = useContext(SidebarContext)
    const { cart, clearCart, totalPrice, itemAmount } = useContext(CartContext)

    return (
        <div className={cx(`${isOpen ? 'active' : ''}`, 'sidebar')}>
            <div className={cx('wrapper')}>
                <div className={cx('title')}>
                    Shopping bag ({itemAmount})
                </div>
                <div>
                    <FontAwesomeIcon onClick={handleClose} className={cx('icon')} icon={faArrowRight} />
                </div>
            </div>
            
            <div className={cx('cart')}>
                {cart.map(item => (
                    <CartItem item={item} key={item.id} />
                ))}
            </div>
            <div className={cx('sidebar_bottom')}>
                <div>
                    <div>Total: $ {`${parseFloat(totalPrice).toFixed(2)}`}</div>
                </div>
                <div>
                    <FontAwesomeIcon onClick={clearCart} className={cx('bottom_icon')} icon={faTrash} />
                </div>
            </div>
            <div style={{padding: '10px 20px'}}>
                <div>
                    <Link to='/' className={cx('cart_checkout')}>View cart</Link>
                </div>
                <div>
                    <Link to='/' className={cx('cart_checkout', 'checkout')}>Checkout</Link>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;