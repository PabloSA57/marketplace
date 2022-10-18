import React, { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../../../Context/Context'
import { Commerce, ProductInfo } from '../../../Interface/Commerce'
import { Mapbox } from '../../../lib/mapbox/Mapbox'
import { AddOrder } from '../../../service/order'
import { Input } from '../../General/Input'
import { ModalUi } from '../../General/Modal'

import { useForm, SubmitHandler, FieldError} from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';

import Switch from '@mui/material/Switch';
import { addQuanty } from '../../../adapter/cart.adapter'
import { useMepa } from '../../../hooks/useMepa'

import { Order } from './Component/Order/Order'
import { useSesionStorage } from '../../../hooks/useSesionStorage'
import { Spiner } from '../../General/Spiner/Spiner'
import { FormStyle } from './style.form'
import { Button } from '../../../styles/style.general'
import { schemaFormCart } from '../../../utils/schemayup'
import { IFormValues } from '../../../Interface/Form'

interface Prop {
    open: boolean,
    handleClose?: () => void,
    typePayment: 'mp' | 'cash' | null,
    productsCart: ProductInfo[],
    amount: number,
    store: Commerce | null,
}






export const FormCart = ({open, handleClose, typePayment, productsCart, store, amount}: Prop) => {
    const {openMP} = useMepa();
    const {todoState} = useContext(TodoContext)
    const {currentUser, LatLng, allproductsCart, socket} = todoState;
    
    const {addOrder} = useSesionStorage('order')
    const [lng, setLng] = useState<number | null>(null)
    const [lat, setLat] = useState<number | null>(null)

    const [stateOrder, setStateOrder] = useState({aproved: false, error: false, loading: false})

   // const [saludo, setSaludo] = useState('hola')

    const [productQuantity, setProductQuantity] = useState<ProductInfo[]>()

    const { register, formState: { errors }, handleSubmit } = useForm<IFormValues>({
        resolver: yupResolver(schemaFormCart)
    });

    const [checked, setChecked] = React.useState(true);
    
   /* useEffect(() => {
        const product = addQuanty(allproductsCart, productsCart)

        setProductQuantity(product)
    }, [])*/

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setChecked(event.target.checked);
            console.log(event.target.checked)
        };
    
    const onSubmit: SubmitHandler<IFormValues> = async (data) => {
        console.log('onSubmit: ', data)
        setStateOrder({aproved: false, error: false, loading: true})
        const newObj = {direction: data.Direccion, number_phone: data.Telefono}
        const infoClient = {...newObj, lat, lng, id :currentUser?.id}
        const storeId = store?.id
        
        const products = addQuanty(allproductsCart, productsCart)
        try {
            const res = await AddOrder({products, storeId, amount, infoClient, typePayment,checked})
                if(res){
                    console.log('aqui toy')
                    addOrder(res)
                    setStateOrder({aproved: true, error: false, loading: false})
                    socket?.current.emit("sendNotification", {
                        sendId: '1234',
                        receiverId: "39464b5d-8e5a-4ede-8a15-22e892d23e6e",
                        infoNoti: 'Pendiente'
                    });
                }
        } catch (error) {
            setStateOrder({aproved: false, error: true, loading: false})
            console.log(error)
        }
    };

    return (
        <ModalUi open={open}>
                <FormStyle>
                
                { (stateOrder.aproved === false && stateOrder.loading === false) || stateOrder.error === true  ?<div>
                    <form className='form' onSubmit={handleSubmit(onSubmit)}>
                        <h3>Informacion del cliente</h3>
                        <Input
                            type='text'
                            label='Direccion'
                            register={register} 
                            required
                            errors={errors.Direccion}
                        />


                        <Input
                            type='tel'
                            label='Telefono'
                            register={register} 
                            required
                            errors={errors.Telefono}
                            />
 
                        <Input 
                            type='textarea'
                            label='Descripcion'
                            register={register} 
                            required
                            errors={errors.Descripcion}
                        />

                    <Mapbox 
                    formLat={setLat} 
                    formLng={setLng}
                    from='formcart'
                    LngLatStore={[store?.lon as number, store?.lat as number]}
                    LngLatClient={LatLng.lng !== null && LatLng.lat !== null ? [LatLng.lng, LatLng.lat] : []}
                    
                    />
                
                    <div className='switch'>
                        <Switch
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                            />
                            {checked ? <p>Delivery</p> : <p>Retirar en negocio</p>}
                    </div>
                    {stateOrder.error === true && <p>error</p>}
                    {typePayment === 'mp' 
                        ?     <Button 
                        width='100%' 
                        height='30px' 
                        backgroundColor='#1070e4' 
                        colortext='#ffffff' 
                        type='submit'
                        >
                            Generar orden de compra
                        </Button>
                        :   <Button 
                        width='100%' 
                        height='30px' 
                        backgroundColor='#d28a16' 
                        colortext='#ffffff' 
                        type='submit'
                        >
                            Generar orden de compra
                        </Button>
                    }
                    <Button 
                        width='100%' 
                        height='30px' 
                        backgroundColor='#d22916' 
                        colortext='#ffffff' 
                        onClick={handleClose}
                        >
                            Cancelar orden de compra
                        </Button>
                    </form>
                </div>
                : null
            }
                
                { stateOrder.loading === true
                ? <div className='loading' >
                        <Spiner />
                        <h2>Cargando Orden...</h2>
                </div> : null}

                {stateOrder.aproved ? <Order /> : null}
                </FormStyle>
            
        </ModalUi>
    )
}
