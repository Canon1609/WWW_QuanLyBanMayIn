const addToCart = (product)=>{
    const cart = JSON.parse(sessionStorage.getItem('cart') || []  );
    const existingProduct = cart.find((item)=> item.id === product.id);
    if(existingProduct){
        existingProduct.quantity += 1;
        
    }
    else{
        cart.push({...product , quantity : 1});
    }
    sessionStorage.setItem('cart' , JSON.stringify(cart));
  
}