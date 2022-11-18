import { yupResolver } from '@hookform/resolvers/yup';
import { CircularProgress, Drawer, Switch } from '@mui/material';
import React, { useContext, useState } from 'react'
import { useForm, SubmitHandler} from 'react-hook-form';
import { TodoContext } from '../../../../../Context/Context';
import { Commerce, ProductInfo } from '../../../../../Interface/Commerce';
import { IFormValues } from '../../../../../Interface/Form';
import { Button } from '../../../../../styles/style.general';
import { schemaFormCart } from '../../../../../utils/schemayup';
import DrawerC from '../../../../General/Drawer/DrawerC';
import { Input } from '../../../../General/Input';
import { ProcesOrderStyle } from './style';
import mplogo from '../../../../../media/mplogo.png'
import { Mapbox } from '../../../../../lib/mapbox/Mapbox';
import { addQuanty } from '../../../../../adapter/cart.adapter';
import { AddOrder } from '../../../../../service/order';
import { AiOutlineClose } from 'react-icons/ai';
import MessageRes from './MessageResponse/MessageRes';
import { useMepa } from '../../../../../hooks/useMepa';
import { MdDeliveryDining } from 'react-icons/md';
import { BiWalk } from 'react-icons/bi';


interface Prop {
    store: Commerce,
    amount: number,
    productsCart: ProductInfo[]
}

const ProcesOrder = ({store, amount, productsCart}: Prop) => {
    const {todoState, setStateDrawer} = useContext(TodoContext)
    const {stateDrawer, LatLng, socket, currentUser, allproductsCart} = todoState;
    const { register, formState: { errors }, handleSubmit } = useForm<IFormValues>({
        resolver: yupResolver(schemaFormCart)
    });
    const [typePayment, setTypePayment] = useState('mp')
    const [lat, setLat] = useState<number | null>(null)
    const [lng, setLng] = useState<number | null>(null)
    const [delivery, setDelivery] = useState(true)
    const [stateResponse, setStateResponse] = useState({aprovada: false, loading: false, error: false})
    const [response, setResponse] = useState(false)
    const {openMP} = useMepa()

    console.log('procesOrder:' ,amount)
    console.log('ltnlatclient: ', LatLng)
    
    const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
        return;
    }

    setStateDrawer({noti: false, order: false});
    };

    const onSubmit: SubmitHandler<IFormValues> = async (data) => {
            console.log('onSubmit: ', data)
            console.log(lat, lng)
            setResponse(true)
            setStateResponse({aprovada: false, loading: true, error: false})
            const newObj = {direction: data.Direccion, number_phone: data.Telefono}
            const infoClient = {...newObj, lat, lng, id :currentUser?.id}
            const storeId = store?.id
            const products = addQuanty(allproductsCart, productsCart)

            
            try {
                const res = await AddOrder({products, storeId, amount, infoClient, typePayment,delivery})
                console.log(res)
                        socket?.current.emit("sendNotification", {
                            sendId: '1234',
                            receiverId: "39464b5d-8e5a-4ede-8a15-22e892d23e6e",
                            infoNoti: 'Pendiente'
                        });

                        if(typePayment === 'mp'){
                            console.log('if mp')
                                openMP(res[0].id)
                            }
                            
                        setStateResponse({aprovada: true, loading: false, error: false})
                    console.log('aqui fuera de if')
            } catch (error) {
                console.log(error)
                setStateResponse({aprovada: false, loading: false, error: true})
            }

            console.log('aqui fuerA')
    }

    const closeDrawer = () => {
        setStateDrawer({noti:false, order: false})
    } 

    return (
        <>
                        <Drawer
                            anchor='right'
                            open={stateDrawer.order}

                        >
                                <ProcesOrderStyle>
                                    <button
                                        className='btn-close'
                                        onClick={closeDrawer}
                                        ><AiOutlineClose /></button>
                                    {!response 
                                        && <><div className='name-store'>
                                        <h2>{store?.name}</h2>
                                        <p>Todo lo que buscas en el dia</p>
                                    </div>

                                    <div className='con-map'>
                                        <Mapbox 
                                            formLat={setLat} 
                                            formLng={setLng}
                                            from='formcart'
                                            LngLatStore={[store?.lon as number, store?.lat as number]}
                                            LngLatClient={LatLng.lng !== null && LatLng.lat !== null ? [LatLng.lng, LatLng.lat] : []}
                                        />
                                    </div>

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <h5>Informacion de la orden</h5>
                                        <Input
                                            type='text'
                                            label='Direccion'
                                            register={register}
                                            errors={errors.Direccion}
                                            required
                                            placeholder='Ej B San expedito mjlote 1'
                                        />
                                        <Input
                                            type='text'
                                            label='Indicacion'
                                            register={register}
                                            errors={errors.Indicacion}
                                            required
                                            placeholder='Casa azul con ventana roja'
                                        />

                                        <div className='telefono'>
                                            <div className='cde'>
                                                <p>
                                                    +54
                                                </p>
                                            </div>

                                            <div className='inp-con'>

                                            <Input
                                                type='Telefono'
                                                label='Telefono'
                                                register={register}
                                                errors={errors.Telefono}
                                                required
                                                placeholder='381XXXXXXX'
                                            />
                                            </div>
                                        </div>

                                        <div className='switch'>
                                            <Switch 
                                                checked={delivery}
                                                onChange={() => setDelivery(!delivery)}
                                            />

                                            {delivery && <div><div className='con-svg'><MdDeliveryDining/></div> <span>Delivery</span></div>}
                                            {!delivery && <div><div className='con-svg'><BiWalk /></div> <span>Buscar en la tienda</span></div>}
                                        </div>

                                        <div className='con-prueba'>
                                            <div className='box'></div>
                                        </div>
                                        <div className='btn-form'>
                                            <button 
                                                className={typePayment === 'mp' ? 'btn-mp active': 'btn-mp'}
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    setTypePayment('mp')}}
                                                ><img src={mplogo} alt="" /></button>
                                            <button
                                            className={typePayment === 'ef' ? 'active': ''}
                                            onClick={(e) => {
                                                e.preventDefault()
                                                setTypePayment('ef')}}
                                            >Efectivo</button>
                                        </div>
                                        {typePayment === 'mp' && <p className='msg-pay'>Se abrira una ventana para pagar con mercadopago</p>}
                                        {typePayment === 'ef' && <p className='msg-pay'>Se enviara una orden al comercio para pagarla luego</p>}
                                        <Button
                                        widht='100%'
                                        height='2em'
                                        type='submit'
                                        backgroundColor='orange'
                                        >
                                            Siguiente
                                        </Button>
                                    </form>

                                    <div className='product-total'>
                                        <h5>
                                            Total de los productos
                                        </h5>
                                        <h5>
                                            ${amount}
                                        </h5>
                                    </div>

                                    <div className='info-store'>
                                        <h5>Datos de la tienda</h5>

                                        <div className='info'>
                                            <p>Dir. B San Expedito</p>
                                            <p>Tel. +54381949829</p>
                                        </div>
                                    </div>
                                    </>}

                                    {response && 
                                    <div className='cont-state'>
                                        {stateResponse.loading && <CircularProgress />}
                                        {stateResponse.aprovada && 
                                            <MessageRes 
                                                state='aprovada'
                                                setResponse={setResponse}
                                                setStateDrawer={setStateDrawer}
                                                typePayment={typePayment}
                                            />
                                        }
                                        {stateResponse.error &&     
                                            <MessageRes 
                                                state='error'
                                                setResponse={setResponse}
                                                setStateDrawer={setStateDrawer}
                                                typePayment={typePayment}
                                            />
                                        }
                                    </div>}
                                </ProcesOrderStyle>
                        </Drawer>
                
        </>
    )
}

export default ProcesOrder;