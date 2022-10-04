import React, { useContext, useState } from 'react'
import { TodoContext } from '../../../Context/Context'
import { SeachStyle } from './style'

export const Search = ({type}: {type:string}) => {
    const [text, setText] = useState('')
    const {searchProduct} = useContext(TodoContext)
    console.log(text)

    const handleSearch = () => {
        searchProduct(text, type)
    }
    return (
            <SeachStyle>
                <input 
                type="text"
                onChange={e => setText(e.target.value)}
                className='search-inp'
                placeholder='Buscar productos'
                />
                <button
                className='search-btn' 
                onClick={handleSearch}
                >Search</button>
            </SeachStyle>
            
    )
}
