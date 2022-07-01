import { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../../../../../Context/Context';
import CardCommerce from './Component/CardCommerce';
import { CommerceStyle, CarouselCommerce } from './style';

const comercios =  [
  {
      id: "1",
      name: "Las Sierras",
      img: "https://laverdadonline.com/wp-content/uploads/2020/12/almacen.jpg",
      lugar: "Tucuman-YerbaBuena"
  },
  {
      id: "2",
      name: "Los Rios",
      img: "https://laverdadonline.com/wp-content/uploads/2020/12/almacen.jpg",
      lugar: "Tucuman-YerbaBuena"
  },
  {
    id: "3",
    name: "Los Rios",
    img: "https://laverdadonline.com/wp-content/uploads/2020/12/almacen.jpg",
    lugar: "Tucuman-YerbaBuena"
},
{
  id: "4",
  name: "Los Rios",
  img: "https://laverdadonline.com/wp-content/uploads/2020/12/almacen.jpg",
  lugar: "Tucuman-YerbaBuena"
}
]
    const Commerce = () => {
        const {todoState, selectStore} = useContext(TodoContext);
        const {commerce} = todoState;
        const [active, setActive] = useState<number>(1);

        useEffect(() => {
        selectStore(commerce[0]?.id)
        }, [commerce])

        console.log('id',comercios[0]?.id)
        const select = (id: number) => {
        setActive(id)
        selectStore(id)
        }

        return (
        <CommerceStyle> 
            <div className='div-row'>
                <div>
                <h3>Comercios</h3>
                </div>
                <div>
                filtro
                </div>
            </div>

            <div className='concardcomercio'>
            <CarouselCommerce>
                {commerce?.map((c) => <CardCommerce Comercio={c} key={c.id} Func={select} active={active}/>)}
            </CarouselCommerce>
            </div>
        </CommerceStyle>
        )
    }

export default Commerce;
