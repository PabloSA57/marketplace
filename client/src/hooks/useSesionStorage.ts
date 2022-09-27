
    const a = window.sessionStorage
export const useSesionStorage = (key: string) => {
    const set = (obj: any) =>   {
        console.log(obj)
        const b = a.getItem(key)
        if(b){
            const c = JSON.parse(b)
            console.log(c)
            c.push(obj)
            console.log(c)
            a.setItem(key, JSON.stringify(c))
        }else {
            const d = [obj]
            console.log(d)
            window.sessionStorage.setItem(key, JSON.stringify(d))
        }
    }
    const get = () => {
        const res = a.getItem(key)
        if(res){
            return JSON.parse(res)
        }
        return []
    }
    
    const delet = (id: number) => {
        const b = a.getItem(key)
        const c = JSON.parse(b as string)
        const d = c.filter((e:any) => e.id !== id)
        a.setItem(key, JSON.stringify(d))
    }


    const addOrder = (obj:any) => {
        const order = a.getItem("order")
        if(order){
            a.removeItem("order")
            a.setItem("order", JSON.stringify(obj))
        }else {
            a.setItem("order", JSON.stringify(obj))
        }
    }

    const deleteOrder = () => {
        a.removeItem("order")
    }
    return {
        set,
        get,
        delet,
        addOrder, 
        deleteOrder
    }
}
