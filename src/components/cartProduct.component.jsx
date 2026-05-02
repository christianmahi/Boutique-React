import poubelle from '../assets/images/poubelle.jpg'
import '../assets/style/cart.css'
import '../assets/style/product.css'
const CartProduct = (({product,onDelete,onChange})=>{
    return (
        <div className="product cartProduct">
            <div className="info">
                <div className="name">{product.name}</div>
            </div>
            <div className="imageProduit">
                <img src={product.image} alt={product.name} />
            </div>
            
            <input type="number" min='1' value={product.quantity} onChange={(a) => onChange(product,a.target.value)} />
            <img className='button' src={poubelle} alt="supprimer au panier" onClick={()=>onDelete(product)}  />
            
        </div>
    )
})

export default CartProduct;