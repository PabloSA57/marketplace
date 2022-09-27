import React from 'react'
import { useMercadopago } from 'react-sdk-mercadopago';


export const useMepa = () => {
    const mercadopago = useMercadopago.v2('TEST-96dd7551-7a19-4944-b398-ba2dfb28e79f', );

    const openMP = (idReference: string) => {
        
        if(mercadopago){
            mercadopago?.checkout({
                preference: {
                    id: idReference,
                },
                autoOpen: true, // Habilita la apertura automática del Checkout Pro
            })
        }
    }

    return {
        openMP
    }
}
