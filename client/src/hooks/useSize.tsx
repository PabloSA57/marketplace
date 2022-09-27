import {useState, useEffect, useContext} from 'react'
import { TodoContext } from '../Context/Context';

export const useSize = () => {
    const {changeWidth} = useContext(TodoContext)
    const [width, setWidth] = useState<number>(
        window.innerWidth
    );

    useEffect(() => {
        function resizeListener() {
        setWidth(window.innerWidth)
    }
        window.addEventListener("resize", resizeListener);
    }, [window.innerWidth])

    useEffect(() => {
        if(width < 850 ){
            changeWidth(true)
        }else{
            changeWidth(false)
        }
    }, [width])

    console.log('sizee')
}
