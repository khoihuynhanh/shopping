import classNames from "classnames/bind";
import styles from './Footer.module.scss'

const cx = classNames.bind(styles)

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('container')}>
                <p className={cx('text')}>Copyright &copy; Ecommerce Shop 2022. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;