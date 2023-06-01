import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import styles from './Hero.module.scss'

import WomanHero from '../../assets/woman_hero.png'

const cx = classNames.bind(styles)

function Hero() {
    return (
        <section className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('text')}>
                    <div className={cx('hero')}>
                        <div className={cx('separate')}></div>
                        <div>new trend</div>
                    </div>
                    <h1>stylish women</h1>
                    <Link style={{textDecoration: 'none'}} to={'/'} className={cx('discover')}>
                        <div>Discover More</div>
                    </Link>
                </div>
                <div>
                    <img src={WomanHero} />
                </div>
            </div>
        </section>
    );
}

export default Hero;    