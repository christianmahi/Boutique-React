import '../assets/style/product.css';
import panierImg from '../assets/images/panier.jpg';

const Product = ({product,onAddCart})=>{
    return (
        <div className="product">
            <div className="info">
                <div className="name">{product.name}</div>
                <div className="description">{product.description}</div>
                <div className="weight">{product.weight}</div>
            </div>
            <div className="imageProduit">
                <img src={product.image} alt={product.name} />
            </div>
            <div className='stock'>
                qté<br />
                {product.stock}
            </div>
            <div className='price'>
                {product.price}
            </div>
            <img className='button' src={panierImg} alt="ajouter au panier" onClick={()=>onAddCart(product)} />
            
        </div>
    )
}
export default Product;