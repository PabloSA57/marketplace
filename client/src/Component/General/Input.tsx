

import React, { useState, useRef } from 'react'
import { Path, UseFormRegister, FieldErrorsImpl, FieldError, ValidationRule} from "react-hook-form";
import { IFormValues } from '../../Interface/Form';
import { InputStyle } from './style.input';




interface IFormValuesUpdateStore {
    Direccion?: string,
    Telefono?: string,
    Nombre?: string,
    }

type InputProps = {
    label: Path< IFormValues >;
    register: UseFormRegister< IFormValues>;
    required: boolean;
    pattern?: ValidationRule<RegExp>
    errors: FieldError | undefined
    type: string
    valueInp?: string,
    placeholder?: string,
};
  // The following component is an example of your existing Input Component
    export const Input = ({ label, register, required, errors, type,pattern, valueInp, placeholder }: InputProps) => {
        const [value, setValue] = useState(valueInp)
        //console.log(errors)
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value)
            console.log(e.target.value)
        }

        return (
        <>
            <InputStyle>
                <label>{label}</label>
                    {type === 'textarea'
                        ? <textarea {...register(label)} cols={30} rows={10}></textarea> 
                        :<input
                            type={type}
                            {...register(label, {required})}
                            className={errors !== undefined ? "inpactive inpgeneral" : "inp inpgeneral"}
                            
                            placeholder={placeholder}
                            />
                    }       
                
                    {errors !== undefined && <p className='message'>{errors.message}</p>}
            </InputStyle>
            
        </>
        )
    };





    const regex = {
        email: new RegExp(
            '^(([^<>()\\[\\]\\\\.,;:\\s@]+(\\.[^<>()\\[\\]\\\\.,;:\\s@]+)*)|(.+))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
        ),
        number: new RegExp('^[0-9]+$'),
    };
    
    interface Prop {
        labelText: string,
        type: string,
        value: string,
        onChange: any,
        typeInput?:'email' 
    }
    
    const style = {
        width: "100%"
    }

/*export cons7t Input = ({labelText, type, value, onChange, typeInput}: Prop) => {
    const [error, setError] = useState(false)

    const functionChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(e.target.value)
        //const t = typeInput;
        //const res = regex[t].test(e.target.value)
        //console.log(res)
        //!res ? setError(true) : setError(false)
        onChange(e.target.value)
    }

    return (
        <div style={{width:"100%"}}>

            <label>
                {labelText}
            </label>
            { type === 'textarea' 
            ? <textarea
                value={value}
                onChange={ functionChange}
            >

            </textarea>
            
            :<input 
            required
                type={type}
                style={style}
                value={value}
                onChange={functionChange}
            />}

            {error ? <p>error</p> : null}
        </div>
    )
}*/
