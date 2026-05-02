import Gauche from './gauche.component.jsx'
import Droite from './droite.component.jsx'
import '../assets/style/app.css'
import ProductData from '../data/products.js' 
import { useState } from 'react'
const App = () => {
  const [ products,setProducts]=useState(ProductData);
  const [filterText,setFilterText]=useState('')
  const [cart,setCart]=useState([]);
  const handleAddCart=(product)=>{
    if (product.stock<=0){
      return;
    }
  const newPro =products.map((p)=> {
    if( p.id === product.id){
      return {
        id:p.id,
        name:p.name,
        description:p.description,
        weight:p.weight,
        price:p.price,
        image:p.image,
        stock:p.stock-1,
      }
    }
    return p
  })
  setProducts(newPro);
  const foundPro=cart.find((p)=> p.id ===product.id);
  if (foundPro){
    const newCart=cart.map((p)=>{
      if (p.id===product.id){
        return {
          id:p.id,
          name:p.name,
          description:p.description,
          weight:p.weight,
          price:p.price,
          image:p.image,
          stock:p.stock,
          quantity:p.quantity +1
        }
      }
      return p
    })
    setCart(newCart);
  }
  else{
    const newCart=[...cart,{
      id:product.id,
        name:product.name,
        description:product.description,
        weight:product.weight,
        price:product.price,
        image:product.image,
        stock:product.stock,
        quantity:1
    }];
    setCart(newCart)
  }
  };

  const deletePanier=(product)=>{
    const newProducts=products.map((p) => {
      if(p.id === product.id){
        return {
          id:p.id,
          name:p.name,
          description:p.description,
          weight:p.weight,
          price:p.price,
          image:p.image,
          stock:p.stock+product.quantity
        }
      }
      return p
    })
    setProducts(newProducts);
    const newCart=cart.filter((p)=> p.id != product.id);
    setCart(newCart);
  }
  const handleplusCart = (product,value) => {
    const newQuanti = parseInt(value,10);
    if (isNaN(newQuanti)||newQuanti<1){
      return
    }
    const cartPro=cart.find((p)=>p.id===product.id);
    const stockPro=products.find((p)=>p.id===product.id);
    if(!cartPro||!stockPro){
      return
    }
    const diff=newQuanti-cartPro.quantity;
    if (stockPro.stock-diff<0){
      return
    }
  
  const newProducts = products.map((p) => {
    if (p.id === product.id) {
      return {
        id: p.id,
        name: p.name,
        description: p.description,
        weight: p.weight,
        price: p.price,
        image: p.image,
        stock: p.stock - diff
      };
    }
    return p;
  });
  setProducts(newProducts);
  const newCart = cart.map((p) => {
    if (p.id === product.id) {
      return {
        id: p.id,
        name: p.name,
        description: p.description,
        weight: p.weight,
        price: p.price,
        image: p.image,
        stock: p.stock,
        quantity: newQuanti
      };
    }
    return p;
  });
  setCart(newCart);
};
  
  return (
    <div className='app'>
      <Gauche products={products} filterText={filterText} setFilterText={setFilterText} onAddCart={handleAddCart} /> 
      <Droite cart={cart} onDelete={deletePanier} onChange={handleplusCart}/>
    </div>
  );
}
export default App;
