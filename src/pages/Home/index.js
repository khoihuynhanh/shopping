import { useContext } from 'react'
import classNames from "classnames/bind";
import styles from './Home.module.scss'

import { ProductContext } from '../../contexts/ProductContext/index'
import Product from '../../components/Product/index'
import Hero from '../../components/Hero/index';

const cx = classNames.bind(styles)

function Home() {
    // get product from product context
    const { products } = useContext(ProductContext)

    // filter category of men and women
    const filteredProducts = products.filter(item => {
        return (
            item.category === "men's clothing" || 
            item.category === "women's clothing" 
        )
    })

    return (
        <div>
            <Hero />
            <section className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('filter')}>
                        {filteredProducts.map(product => (
                            <Product product={product} key={product.id} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;