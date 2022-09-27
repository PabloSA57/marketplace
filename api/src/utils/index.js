const orderProductCart = (products) => {
    console.log(products)
    let array = products.map(e => {
        return {id:e.almacen.id, name: e.almacen.name}
    })
    let found ={};
    let idArray = array.filter(function(element){
        return found.hasOwnProperty(element.id)? false : (found[element.id]=true);
    });
    let arr2 = [];
    for(let i = 0; i < idArray.length; i++){
        let newArr = products.filter(e => e.almacen.id === idArray[i].id)
        
        arr2.push({products: newArr, store: idArray[i]})
        
    }
    return arr2;
}


module.exports = {
    orderProductCart
}