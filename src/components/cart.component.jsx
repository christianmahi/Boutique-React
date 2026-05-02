import '../assets/style/cart.css'
import CartProduct from './cartProduct.component.jsx';
const Cart = ({cart,onDelete,onChange}) =>{
    const cartPro = cart.map((product) => (
     <CartProduct key={product.id}  product={product} onDelete={onDelete} onChange={onChange} /> 
        ));
    const poidTotal = cart.reduce((sum,product)=>{
        return sum+product.weight*product.quantity
    },0)
    const priceTotal=cart.reduce((sum,product)=>{
        return sum+product.price*product.quantity
    },0)
    return (
        <div className="cart">
            <h4>Panier</h4>
            <div className='weight'>
                poids total {poidTotal}
            </div>
            {cartPro}
            <div className="total">
                total commande:  <span className='gras'>{priceTotal} €</span>
            </div>
        </div>        
    )
}
export default Cart;