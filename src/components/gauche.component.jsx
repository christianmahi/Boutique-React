import ProductList from './productList.component.jsx';
const Gauche = ({products,filterText,setFilterText,onAddCart}) => {
    return <ProductList products = { products} filterText={filterText} setFilterText={setFilterText} onAddCart={onAddCart}/>;
}
export default Gauche;