import Product from "./product.component.jsx";
import '../assets/style/productList.css';
const ProductList = ({products,filterText,setFilterText,onAddCart
}) =>{
    const filterProduc = products.filter((product)=>
        product.name.toLowerCase().includes(filterText.toLowerCase()));
    const ProductComp = filterProduc.map((product)=>(
        <Product key = {product.id} product={ product} onAddCart={onAddCart}/>
    ))
    return (
        <div className="productList">
            <h4>Produits </h4>
            <div className="filter">
                <input type="text"
                placeholder="filtrer..."
                value={filterText}
                onChange={(e)=>setFilterText(e.target.value)}
                />
            </div>
            <div className="productsZone">
                {ProductComp}
            </div>
            
        </div>
    );
}
export default ProductList;