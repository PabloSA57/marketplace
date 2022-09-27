import {useContext, useState} from 'react'
import { TodoContext } from '../../../Context/Context'

export const Search = () => {
    const [search, setSearch] = useState('')
    const {searchProduct} = useContext(TodoContext);

    
    return (
                        <div className='search'>
                            <input type="text" name="searchp" value={search} onChange={e => setSearch(e.target.value)}/>
                            <button onClick={ () => searchProduct(search)}>Sea</button>
                        </div>
    )
}
