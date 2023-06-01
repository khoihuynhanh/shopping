import { createContext, useState, useEffect } from 'react'
export const CartContext = createContext()

function CartProvider({children}) {
    const [cart, setCart] = useState([])
    const [itemAmount, setItemAmount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const total = cart.reduce((acc, curr) => acc + curr.price * curr.amount, 0)
        setTotalPrice(total)
    })

    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((acc, curr) => acc + curr.amount, 0)
            setItemAmount(amount)
        }
    }, [cart])

    const addToCart = (product, id) => {
        const newItem = {...product, amount: 1}
        // check if item is already in cart
        const cartItem = cart.find(item => {
            return item.id === id
        })
        // if item is already in cart
        if (cartItem) {
            const newCart = [...cart].map(item => {
                if (item.id === id) {
                    return {...item, amount: cartItem.amount + 1}
                } else {
                    return item
                }
            })
            setCart(newCart)
        } else {
            setCart([...cart, newItem])
        }
    }

    const removeItem = (id) => {
        const newCart = cart.filter(item => item.id !== id)
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const increaseItem = (id) => {
        const item = cart.find(item => item.id === id)
        addToCart(item, id)
    }

    const decreaseItem = (id) => {
        const item = cart.find(item => item.id === id)
        if (item) {
            const newCart = cart.map(item => {
                if (item.id === id) {
                    return {...item, amount: item.amount - 1}
                } else {
                    return item
                }
            })
            setCart(newCart)
        } 

        if (item.amount < 2) {
            removeItem(item)
        }
    }

    return (
        <CartContext.Provider 
            value={{
                cart, 
                itemAmount,
                totalPrice,
                addToCart,
                removeItem,
                clearCart,
                increaseItem,
                decreaseItem,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;