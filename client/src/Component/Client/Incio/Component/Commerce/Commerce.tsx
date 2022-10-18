import { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../../../../../Context/Context';
import CardCommerce from './Component/CardCommerce';
import MapModal from './Component/Map/MapModal';
import { CommerceStyle, CarouselCommerce } from './style';

import { BiLocationPlus } from "react-icons/bi";
import { Mapbox } from '../../../../../lib/mapbox/Mapbox';

    const Commerce = () => {
        const {todoState, selectStore} = useContext(TodoContext);
        const {commerce} = todoState;
        const [active, setActive] = useState<number>(1);

        const [lng, setLng] = useState<number | null>(null)
        const [lat, setLat] = useState<number | null>(null)

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
            <div className='con-mapbox'>
                <Mapbox
                    formLat={setLat}
                    formLng={setLng}
                    from='searchstore'
                />
            </div>

            <div className='con-commerce'>
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
