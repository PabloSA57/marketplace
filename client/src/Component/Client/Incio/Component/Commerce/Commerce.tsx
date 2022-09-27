import { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../../../../../Context/Context';
import CardCommerce from './Component/CardCommerce';
import MapModal from './Component/Map/MapModal';
import { CommerceStyle, CarouselCommerce } from './style';

import { BiLocationPlus } from "react-icons/bi";

    const Commerce = () => {
        const {todoState, selectStore} = useContext(TodoContext);
        const {commerce} = todoState;
        const [active, setActive] = useState<number>(1);

        const [open, setOpen] = useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        useEffect(() => {
        selectStore(commerce[0]?.id)
        }, [commerce])

        const select = (id: number) => {
        setActive(id)
        selectStore(id)
        }

        return (
        <CommerceStyle> 
            <div className='div-row'>
                <div className='text-sub'>
                    <h3>Comercios</h3>
                </div>

                <div>
                    <button className='btn-loca' onClick={handleOpen}><BiLocationPlus /></button>
                </div>
            </div>
            <MapModal open={open} handleClose={handleClose}/>
            <div className='concardcomercio'>
            <CarouselCommerce>
                { commerce.length > 0 
                    ? commerce?.map((c) => <CardCommerce Comercio={c} key={c.id} Func={select} active={active}/>)
                    : <div>No hay comercios cerca tuyo</div>
                }
            </CarouselCommerce>
            </div>
        </CommerceStyle>
        )
    }

export default Commerce;
