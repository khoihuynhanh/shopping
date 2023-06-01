import { useContext, useEffect, useState } from 'react'
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

import styles from './Header.module.scss'
import { SidebarContext } from '../../contexts/SidebarContext/index';
import { CartContext } from '../../contexts/CartContext/index';
import { faBagShopping, faWater } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)

function Header() {
    const [isActive, setIsActive] = useState(false)
    const { isOpen, setIsOpen } = useContext(SidebarContext)
    const { itemAmount } = useContext(CartContext)

    useEffect(() => {
        const handleScroll = () => {
            return window.scrollY > 200 ? setIsActive(true) : setIsActive(false)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={cx(`${isActive ? 'bg-active' : 'bg-normal'}` ,'wrapper')}>
            <Link to='/'>
                <FontAwesomeIcon className={cx('logo')} icon={faWater} />  
            </Link>
            <div className={cx('bag_shopping')}>
                <FontAwesomeIcon className={cx('bag_icon')} icon={faBagShopping} onClick={() => setIsOpen(!isOpen)}/>
                <div className={cx('item_amount')}>
                    {itemAmount}
                </div>
            </div>
        </header>
    );
}

export default Header;