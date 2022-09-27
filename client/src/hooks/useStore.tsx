import React, { useState, useEffect, useContext } from 'react'
import { TodoContext } from '../Context/Context'
import { hasStore } from '../service/store'

export const useStore = () => {
    const {setCommerce} = useContext(TodoContext)

    console.log('useStore')
    useEffect(() => {
        const storeHas = async () => {
            const s = await hasStore();
            const {user,createdAt, updatedAt, userId, ...rest} = s.store;
            console.log(rest)
            localStorage.setItem('idStore', rest.id);
            setCommerce(rest)
        }

        storeHas();
    }, [])

    const prueba = () => {
        console.log('prueba store')
    }

    return {
        prueba
    }
}
