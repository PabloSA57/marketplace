import {Commerce, ProductInfo} from "../Interface/Commerce";

export const storeOrder = (products: ProductInfo[]) => {
    console.log(products)
    let arrayStore = products?.map( (e:ProductInfo): Commerce => {
        return {
            id: e?.almacen?.id as number,
            name: e?.almacen?.name as string,
            lat: e?.almacen?.lat as number,
            lon: e?.almacen?.lon as number,
            imgurl: e?.almacen?.imgurl as string
        }
    })
        let found:any = {};
        let idArray = arrayStore.filter(function(element: any){
            return found.hasOwnProperty(element.id )? false : (found[element?.id ]=true);
        });

        console.log(idArray)

        return idArray
}

export const addQuanty = (arr1: any, arr2: any) => {

    console.log(arr1, arr2)
    const newarr = arr1.map((e: any) => {
    
        const fil = arr2.filter((f: any) => f.id === e.id)
        const quantity = fil[0].product.precio / e.product.precio
        console.log(quantity)
        return{
            id: e.id,
            product: {...e.product, quantity}
        }
    })

    console.log(newarr)
    return newarr
}