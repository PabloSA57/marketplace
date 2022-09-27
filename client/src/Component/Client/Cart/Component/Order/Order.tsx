import React, { useEffect, useState } from 'react'
import { ProductInfo } from '../../../../../Interface/Commerce';
import { useSesionStorage } from '../../../../../hooks/useSesionStorage';
import { OrderStyle } from './style';
import logoOrder from '../../../../../media/order-creada-pendiente.png'
import { useMepa } from '../../../../../hooks/useMepa';
import { CancelOrder } from '../../../../../service/order';
import { Spiner } from '../../../../General/Spiner/Spiner';
import { Button } from '../../../../../styles/style.general';

type State = 'aprovado' | 'pendiente' | 'cancelada' | 'cargando' | 'error'
export const Order = () => {
  const {openMP} = useMepa()
  const {get} = useSesionStorage('order')
  const [order, setOrder] = useState(get()[0])
  const [state, setState] = useState<State>('pendiente')

  const payment = async () => {
    await openMP(order?.id)
  }

  const cancelOrder = async () => {
    setState('cargando')
    try {
      await CancelOrder(order.id)
      setState('cancelada')
      setTimeout(() => {
          window.location.reload()
      }, 2000)
    } catch (error) {
      console.log(error)
      setState('error')
    }
    
  }

  return (
      <OrderStyle>
        <div className='container'>
        <div className='head'>
          <h2 className='head-h2'>Orden Creada</h2>
          <h5 className='head-h5'>{order.store.name}</h5>
        </div>

        <div className='datos'>

          <div className='datos-logo'>
          <img  src={logoOrder}/>
          </div>
          
          <div className='datos-order'>
            <div className='datos-general'>
              <p>Codigo de Orde</ p>
              <p>{order.id.slice(-5)}</p>
            </div>
            
            <div className="datos-general">
              <p>Fecha</ p>
              <p>12/2/2</p>
            </div>

            <div  className="datos-general">
              <p>Estado</ p>
              <p>{order.state}</p>
            </div>
          </div>
        </div>

        <div className='product'>
          <h3>Productos</h3>
          <div className='product-info'>
            {order.detailorders.map((e: any) => (
              <div className='pro-i'>
                <p>{e.product.name}</p>
                <p>{e.quantity}/uni</p>
                <p>${e.precio}</p>
              </div>
              
                ))}
          </div>
        </div>

        <div className='amount-total precios'>
          <div className='datos-general'>
            <h3>Precio</h3>
            <p>${order.amount}</p>
          </div>
        </div>

        <div className='amount-total'>
          <div className='datos-general'>
            <h3>Total</h3>
            <p>${order.amount}</p>
          </div>
        </div>


        { state === 'pendiente' || state === 'error'?
          
          (<div>
            

          {order.type_payment === 'mp' 
            ? <button onClick={payment}>Pagar con mercadopago</button>
            : <Button 
            width='100%'
            height='35px'
            backgroundColor='#339f47' 
            colortext='#ffffff'
            onClick={cancelOrder} 
          >
            Aprobar
          </Button>
          }
          <Button 
              width='100%'
              height='35px'
              backgroundColor='#ea451c' 
              colortext='#ffffff'
              onClick={cancelOrder} 
            >
              Cancelar
            </Button>
          {state === 'error' && <p>Se genero un error</p>}
        </div>) 
          : null
        }
          {state === 'cargando' && <Spiner />}
          {state === 'aprovado' &&  <p>Orden aprovada</p>}

          {state === 'cancelada' &&  <p>Orden cancelada</p>}
        </div>
        
      </OrderStyle>
  )
}
