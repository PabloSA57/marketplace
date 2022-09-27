import {useState, useEffect, useContext} from 'react'
import { TodoContext } from '../Context/Context'
import { Authentication } from '../service/auth'

export const useAuth = () => {
    const {setCurrentUser} = useContext(TodoContext)

    useEffect(() => {
        const auth = async () => {

            try {
                const res = await Authentication();
                const resp = res as any
                setCurrentUser(resp.data)
            } catch (error) {
                console.log(error)
            }
            
        }
        auth()
    },[])
}
