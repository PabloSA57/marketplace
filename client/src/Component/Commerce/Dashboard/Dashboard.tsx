import { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../../../Context/Context';
import { Product } from '../../../Interface/Commerce';
import { countAndAmount } from '../../../service/order';
import { bestProductsStore } from '../../../service/product-store';
import { CardDashboard } from './component/CardDashboard';
import CardProduct from './component/CardProduct';
import { DashboardStyle } from './style';
import amountImg from '../../../media/amount.png'
import soldImg from '../../../media/sold.png'

type countAmountT = {
    count: number,
    amount: number
}

type bestProductI = {
    sumQuan: number,
    product: Product
}

const Dashboard = () => {
    const {todoState} = useContext(TodoContext);
    const {currentUser, mycommerce} = todoState;
    const [state, setState] = useState<string | null>('Ambos');
    const [countAmount, setCountAmount] = useState<countAmountT | null>(null)
    const [bestProduct, setBestProduct] = useState<bestProductI[] | []>([]);
    console.log(currentUser)
    console.log(bestProduct)
    
    useEffect(() => {
        ( async () => {
            if(mycommerce){
                try {
                    const res = await countAndAmount(mycommerce?.id as number)
                    console.log(res)
                    
                    setCountAmount(res[0] as countAmountT)
                } catch (error) {
                    console.log(error)
                }
            }
            
            
        })()
        
    }, [mycommerce])

    useEffect(() => {
        ( async () => {
            if(mycommerce){
                   try {
            const resp = await bestProductsStore(mycommerce?.id as number)
            console.log(resp)
            setBestProduct(resp)
        } catch (error) {
            console.log(error)
        }
            }
         })()
    }, [mycommerce])

    return (
            <DashboardStyle>
                <div className='con'>
                    <div className='con1'>
                        <div className='con11'>
                            {currentUser?.name !== undefined ? <><span className='con111'>Hola {currentUser?.name}!!</span>
                            <span className='con112'>Bienvenido a tu panel de control</span></>
                            : <div>Cargando...</div>    
                        }
                        </div>
                    </div>
                    <div style={{height: "150px", overflow: "hidden"}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}><path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{stroke: "none", fill: "#08f"}}></path></svg></div>

                    <div>
                        <div>Medios de pago: </div>
                        {state === null ? <div>Loading</div> 
                        : state === 'E' 
                            ? <div> Efectivo</div> 
                            : state === 'MP' 
                                ? <div>Mercado Pago</div>
                                : state === 'Ambos'
                                    ? <div>Mp y Efectivo</div>
                                    : <div></div>
                    }
                        
                    </div>

                    <section className='con2'>
                        <div className='con21'>
                            <div>
                                <h3 className='subtitulos-dh'>Actividades</h3>
                            </div>

                            <div className='con22'>
                                <CardDashboard
                                    count_amount={countAmount?.count}
                                    title={'Total Ventas'}
                                    imgurl={amountImg}
                                />
                                <CardDashboard 
                                    count_amount={countAmount?.amount}
                                    title={'Total Saldo'}
                                    imgurl={soldImg}
                                />
                            </div>
                        </div>
                    </section>
                {//Lista de productos 
                }
                    <section className='con3'>
                        <div className='con11'>
                            <div>
                                <h3 className='subtitulos-dh'>Productos mas vendidos</h3>
                            </div>

                            <div className='con22'>
                                    {bestProduct?.map((e, i) => <CardProduct bestProduct={e} index={i}/>)}
                                    
                            </div>
                        </div>
                    </section>
                </div>
            </DashboardStyle>
    )
}


export default Dashboard;