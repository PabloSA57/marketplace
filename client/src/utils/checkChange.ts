export const checkChange = (obj1: any, obj2: any) => {
    const obj3 = {
        name: obj2.Nombre,
        location: obj2.Direccion,
        number_phone: obj2.Telefono,
        lat: obj2.lat,
        lon: obj2.lon
    }
    
    let obj4= {}

    for(const [key1, value1] of Object.entries(obj1)){
    for(const [key2, value2] of Object.entries(obj3)){
        if(key1 === key2) {
            
        if(value1 !== value2) obj4 = {...obj4, [key2]: value2}
        }
    
    }
    }
    return obj4
}