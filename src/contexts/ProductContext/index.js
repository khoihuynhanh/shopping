import { useState, useEffect, createContext } from 'react'

// create context
export const ProductContext = createContext()

function ProductProvider({children}) {
    const [products, setProducts] = useState([])

    // fetch api
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then(res => res.json())
            .then(res => setProducts(res))
    }, [])
    
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const res = await fetch('https://fakestoreapi.com/products')
    //         const data = await res.json()
    //         setProducts(data)
    //     }
    //     fetchProducts()
    // }, [])

    return (
        <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
    );
}

export default ProductProvider;